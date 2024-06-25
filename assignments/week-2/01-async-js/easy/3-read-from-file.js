var fs = require('fs');

fs.readFile("assignments\\week-2\\01-async-js\\easy\\a.txt", 'utf-8', function(err, data) {
    console.log(data);
});
