const path = require('path');

/*module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});*/

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: 'soundbendordb.clvknrebnm28.us-east-1.rds.amazonaws.com',
      port: 3306,
      database: 'soundbendordb',
      user: 'SoundBendorAdmin',
      password: '2FYJKDwF4hzapd5qvgpnhbmkYX39Bh'
    },
  },
});

