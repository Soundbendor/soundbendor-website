import content from '../data/database.json'

function Person (rawData) {
  let p = {}
  p= Object.assign(p, rawData)
  p.RawData = rawData
  return p
}

const PersonService = {
  getRawPerson: function (kwargs) {
    const people = this.getRawPeople(kwargs)
    if (people.length) {
      return people[0]
    }
   },
  getRawPeople: function (kwargs) {
    return Object.values(content.data['api::person.person'])
  },
  getPerson: function (kwargs) {
    const rawperson = this.getRawPerson(kwargs)
    let p
    if (rawperson) {
      p = Person(rawperson)
    } else {
      p = Person({})
    }
    return p
  },
  getPeople: function (kwargs) {
    const people = this.getRawPeople(kwargs)
    return people.map(person => Person(person))
  }
}

module.exports = PersonService
