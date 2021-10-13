const myNum = require('./function');
require("./new")
myNum.sayHello("Kedir Zeinu");
console.log(myNum.num);
let i= 0;
while(i<myNum.num.length){
    console.log(myNum.num[i]);
    i++;
}
const os = require("os");

const thisComputer = {
    name: os.type(),
    release: os.release(),
    mem: os.totalmem() / Math.pow(10,9) ,
    freememory: os.freemem()
        
}



console.log(thisComputer);