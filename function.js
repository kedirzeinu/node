const _ = require("lodash");
const array = ['k',['e' ,['d', ['i', ['r']]]]];
console.log(`My name is ${_.flattenDeep(array).join("")}`);
const num = [1, 2, 3];
function sayHello(name){
    console.log(`Hello ${name}, how are you doing?`);
}

module.exports = {sayHello , num};
