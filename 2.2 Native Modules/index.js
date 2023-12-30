const fs = require("fs");

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    fs.writeFile("m2.txt", data, err => {
        if (err) throw err;
        console.log(data);
    } );
});

