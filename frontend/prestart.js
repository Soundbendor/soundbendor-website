require('dotenv').config()
const imp = require('./pages/api/import')
const res = {
  data: { status: 0, json: {} },
  json: function (x) {
    this.data.json = x
    return this
  },
  status: function (x) {
    this.data.status = x
    return this
  }
}
imp({}, res, function (x) {
  console.log(x.data)
})
