const fs = require('fs');
fs.readFile("./content/subfolder/first.js" , "utf-8" , (err , result)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log(result);
})