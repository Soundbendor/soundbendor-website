const https = require('https')
const fs = require('fs')
const fc = require('filecompare')

function handler (req, res, callback) {
  const myFileName = './data/database' + Date.now() + '.json'
  const databaseFileName = process.env.db_file_local_name
  if (!fs.existsSync(databaseFileName)) {
    fs.writeFileSync(databaseFileName, '')
  }

  fs.writeFileSync(myFileName, '')
  const file = fs.createWriteStream(myFileName)
  https.get(process.env.db_file_location, function (response) {
    response.pipe(file)
    // after download completed close filestream
    file.on('finish', () => {
      file.close()
      // file compare - result is in the callback function
      fc(databaseFileName, myFileName, function (isEqual) {
        if (isEqual) {
          // if equal, delete the temporary file.
          fs.unlink(myFileName, function () {
            res.status(200).json({ status: 'Import Completed: No Change in Data' })
            if (callback) {
              callback(res)
            }
          })
        } else {
          // if not equal, copy the temporary file contents to the live datafile
          fs.copyFile(myFileName, databaseFileName, function () {
            res.status(200).json({ status: 'Import Completed: Data Updated' })
            if (callback) {
              callback(res)
            }
          })
        }
      })
    })
  })
}

module.exports = handler
