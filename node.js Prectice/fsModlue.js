const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err , data);
// });
// console.log("Finish reading file");

// ---------- read file ----------------
// const a = fs.readFileSync('file.txt');
// console.log(a.toString());   // string ma jova mate atherwise  buffer code

// console.log("Finish reading file");


// --------- write file ---------------
fs.writeFile('file.txt', "This is a data in fs file" , () => {
  console.log('Written to the file');
})