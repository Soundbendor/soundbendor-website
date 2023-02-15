
function sortData (data, kwargs, sortByKey, sortByDirectionKey) {
  if (sortByKey in kwargs && kwargs[sortByKey] in data[0]) {
    // defaulting the presort direction to ascending
    if (!(sortByDirectionKey in kwargs)) kwargs[sortByDirectionKey] = 1
    const key = kwargs[sortByKey]
    const direction = kwargs[sortByDirectionKey]

    if (Array.isArray(direction)) {
      data.sort((x, y) => {
        if (!(key in y) && !(key in x)) return 0
        if (!(key in y)) return -1
        if (!(key in x)) return 1
        const yi = direction.indexOf(y[key])
        const xi = direction.indexOf(x[key])
        if (yi === -1 && xi === -1) return 0
        if (yi === -1) return -1
        if (xi === -1) return 1
        if (xi < yi) return -1
        if (xi > yi) return 1
        return 0
      })
    } else {
      data.sort((x, y) => {
        if (!(key in y) && !(key in x)) return 0
        if (!(key in y)) return direction * -1
        if (!(key in x)) return direction
        if ((x[key] < y[key])) return direction * -1
        if ((x[key] > y[key])) return direction
        return 0
      })
    }
  }
}

const FilterFunctions = {
  eq: (key, value, obj) => obj[key] === value,
  neq: (key, value, obj) => obj[key] !== value,
  lt: (key, value, obj) => obj[key] < value,
  lte: (key, value, obj) => obj[key] <= value,
  gt: (key, value, obj) => obj[key] > value,
  gte: (key, value, obj) => obj[key] >= value,
  like: (key, value, obj) => obj[key].includes(value),
  sw: (key, value, obj) => obj[key].startsWith(value),
  ew: (key, value, obj) => obj[key].endsWith(value),
  in: (key, value, obj) => value.includes(obj[key])
}

function filterData (data, kwargs, filterFunctions) {
  let myData = data
  for (const key in kwargs) {
    if (key.match(/^.+__\w+$/)) {
      const filterInfo = key.split('__')
      const propName = filterInfo[0]
      const funcName = filterInfo[1]
      const propValue = kwargs[key]
      if (funcName in filterFunctions && propValue !== undefined) {
        myData = myData.filter(filterFunctions[funcName].bind(null, propName, propValue))
      }
    }
  }
  return myData
}

function paginateData (data, kwargs) {
  let myData = data

  if ('pageSize' in kwargs && !isNaN(kwargs.pageSize)) {
    if (!('page' in kwargs)) kwargs.page = 1
    myData = myData.slice((kwargs.page - 1) * kwargs.pageSize, (kwargs.page) * kwargs.pageSize)
  }

  return myData
}

function capitalizeString (s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const BaseService = {
  getContent: () => require('../data/database.json'),
  filterFunctions: FilterFunctions,
  defaultDataConstructor: function (rawData) {
    let d = {}
    // we do this so that we do not have the same reference to an object in memory and create race conditions
    d = Object.assign(d, rawData)
    d.RawData = rawData
    return d
  },
  constructDefaultService: function (databaseId, singularName, pluralName, datatype, filterFunctions) {
    if (!pluralName) {
      pluralName = singularName.toString() + 's'
    }
    if (!filterFunctions) {
      filterFunctions = BaseService.filterFunctions
    }
    if (!datatype) {
      datatype = BaseService.defaultDataConstructor
    }
    const response = {}
    const singularNameCap = capitalizeString(singularName)
    const pluralNameCap = capitalizeString(pluralName)
    response['getRaw' + pluralNameCap] = BaseService.getRawData(databaseId, filterFunctions)
    response['getRaw' + singularNameCap] = kwargs => {
      return BaseService.getRawDatum(response['getRaw' + pluralNameCap], kwargs)
    }
    response['get' + pluralNameCap] = kwargs => {
      return BaseService.getData(response['getRaw' + pluralNameCap], datatype, kwargs)
    }
    response['get' + singularNameCap] = kwargs => {
      return BaseService.getDatum(response['getRaw' + singularNameCap], datatype, kwargs)
    }

    return response
  },
  getRawData: function (id, filterFunctions) {
    if (!filterFunctions) {
      filterFunctions = BaseService.filterFunctions
    }
    return function (kwargs) {
      let rawData = Object.values(BaseService.getContent().data[id])

      // When key word arguments (kwargs) are passed, we can perform filtering
      // kwargs can be an OBJECT with keys and values.
      // an example of kwargs includes: {'presortBy': 'id', 'id__eq': 1}
      if (typeof kwargs === 'object' && !Array.isArray(kwargs) && kwargs !== null && rawData.length) {
        sortData(rawData, kwargs, 'presortBy', 'presortDirection')
        rawData = filterData(rawData, kwargs, filterFunctions)
        sortData(rawData, kwargs, 'postsortBy', 'postsortDirection')
        rawData = paginateData(rawData, kwargs)
      }
      return rawData
    }
  },
  getRawDatum: function (getRawDataFn, kwargs) {
    const images = getRawDataFn(kwargs)
    if (images.length) {
      return images[0]
    }
  },
  getDatum: function (getRawDatumFn, datatype, kwargs) {
    const rawDatum = getRawDatumFn(kwargs)
    let p
    if (rawDatum) {
      p = datatype(rawDatum)
    } else {
      p = datatype({})
    }
    return p
  },
  getData: function (getRawDataFn, datatype, kwargs) {
    const data = getRawDataFn(kwargs)
    return data.map(x => datatype(x))
  }
}

module.exports = BaseService
