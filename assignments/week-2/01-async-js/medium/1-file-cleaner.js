var fs = require('fs');

fs.readFile("assignments\\week-2\\01-async-js\\medium\\a.txt",'utf-8', function(err, data){
    console.log(data);
    data = data.trim().replace(/\s+/g, ' ');;
    fs.writeFile("assignments\\week-2\\01-async-js\\medium\\a.txt",data,  (err) => {
        if (err)
          console.log(err);
        else {
          console.log("Updated file written successfully\n");
          fs.readFile("assignments\\week-2\\01-async-js\\medium\\a.txt", 'utf-8', function(err, data) {
            console.log(data);
        });
        }
      });
});