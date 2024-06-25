var fs = require('fs');

fs.readFile("assignments\\week-2\\01-async-js\\easy\\a.txt", 'utf-8', function(err, data) {
    console.log(data);
    data += " Copyright @ OM PATIL"
    fs.writeFile("assignments\\week-2\\01-async-js\\easy\\a.txt",data,  (err) => {
        if (err)
          console.log(err);
        else {
          console.log("Updated file written successfully\n");
          fs.readFile("assignments\\week-2\\01-async-js\\easy\\a.txt", 'utf-8', function(err, data) {
            console.log(data);
        });
        }
      });    
});


