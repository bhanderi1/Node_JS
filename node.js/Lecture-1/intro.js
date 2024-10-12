// File System module

const { error } = require('console')
const fs = require('fs')      //comman JS
// import * as fs from "fs";  //ESM

function add(a, b) {
    return a + b
}
function mul(a, b) {
    return a * b
}

// File open , close , write , read , append , update , rename , delete

// ------------------open method --------------------------
// asynchronous  
fs.open("./hello.txt" , (err , result) => {
    if(err)
        console.log(err);
    else
        console.log('File open Success');
})

// synchronous
// fs.openSync('./hello.c')
console.log('File Opened Successfully...');


// ------------------Write method --------------------------
// asynchronous  
// fs.writeFile('./hello.txt' , 'Hello, How are you???' , (err) => {
//     if(err)
//         console.log(err);
//     else
//        console.log('File Write Success');
// })

// synchronous
// let data = `
// #include<stdio.h>
// int main(){
// printf("hello world");
// return 0;
// }
// `
// fs.writeFileSync('./hello.c', data)
// console.log('File Write Successfully...');


// ------------------Read method --------------------------
// let t1 = performance.now()
// console.log("start Time : ========> " , t1);
// console.log("Addition : ========> " , add(10,20));

// // asynchronous 
// fs.readFile('./hello.txt' , 'utf-8' , (err , data)=>{
//     if(err)
//         console.log(err);
//     else
//        console.log(data);
// })

// synchronous
// let aa =fs.readFileSync('./hello.txt' , 'utf-8')
// console.log(aa);

// console.log("Multiplication : =======> " , mul(11,20));
// let t2 = performance.now()
// console.log("End Time: =======> " , t2);
// console.log("Diffrence Time: ========> ", t2-t1 );



// ------------------append method --------------------------
// asynchronous 
// let data = hello this is append and this is a second method async
// fs.appendFile('./hello.txt', data, (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('sucess');
// })

// synchronous
// fs.appendFileSync('./hello.txt' ,data)
// console.log('append sucessfully...');


// ------------------Rename method --------------------------
// asynchronous
// fs.rename('./hello.txt', './qode.txt', (err) => {
//     if (err)
//         console.log(err);

//     else
//         console.log('successfully');
// })

// synchronous
// fs.renameSync('./hello.c' , './skill.c')
// console.log('rename sucessfully...');

// ------------------Delete method --------------------------
// asynchronous
// fs.unlink('./hello.txt',(err) =>{
//     if(err)
//         console.log(err);
//     else
//      console.log('success');
// })

// fs.unlinkSync('./hello.txt')
// console.log('Deleted file....');