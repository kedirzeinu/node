const {resolve , sep} = require('path');
const { readFileSync , writeFileSync , readFile , writeFile} = require('fs');
function nameTeller(){
  console.log("Hello Nassir");
}
console.log(resolve(__filename));
const first = writeFileSync('./content/subfolder/first.txt', 'Hello this is the First');
const second = writeFileSync('./content/subfolder/second.txt', 'Hello this is the Second');
const write = writeFileSync('./content/subfolder/writef-sync.txt' ,'There you are, created file with WRITEFILESYNC');
const firstRead = readFileSync('./content/subfolder/first.txt','utf-8');
const secondRead = readFileSync('./content/subfolder/second.txt','utf-8')
console.log(firstRead);
console.log(secondRead);
console.log(readFileSync('./content/subfolder/writef-sync.txt' ,'utf-8'));
const firstAsync = readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
  if(err){
    console.log(err);
    return;
  }
})

nameTeller();