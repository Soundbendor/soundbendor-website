/*
const path = require('path')

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
}); */

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DB_HOST', '0.0.0.0'),
      port: env.int('DB_PORT', 3306),
      database: env('DB_DB'),
      user: env('DB_USER'),
      password: env('DB_PASS')
    }
  }
})
