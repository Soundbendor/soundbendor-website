const https = require('https');
const fs = require('fs');
const fc = require ('filecompare');

function handler (req, res, callback) {
    const my_file_name = "./data/database"+Date.now()+".json";
    const database_file_name = process.env.db_file_local_name;
    if(!fs.existsSync(database_file_name)){
      fs.writeFileSync(database_file_name, "");
    }

    fs.writeFileSync(my_file_name, "");
    const file = fs.createWriteStream(my_file_name);
    const request = https.get(process.env.db_file_location, function(response) {
      response.pipe(file);
      // after download completed close filestream
      file.on("finish", () => {
        file.close();
        //file compare - result is in the callback function
        fc(database_file_name, my_file_name, function(isEqual){
          if(isEqual){
            //if equal, delete the temporary file.
            fs.unlink(my_file_name, function(){
              res.status(200).json({'status': 'Import Completed: No Change in Data'});
              if(callback){
                callback(res);
              }
            });
          } else {
            //if not equal, copy the temporary file contents to the live datafile
            fs.copyFile(my_file_name, database_file_name, function(){
              res.status(200).json({'status': 'Import Completed: Data Updated'});
              if(callback){
                callback(res);
              }
            });
          }

        });
     });
  });
}

module.exports = handler;