function helloName(){
    const name = prompt("Hey who are you: ");
    res.write(`"Hello ${name}"`);
}
exports.helloName;