const http = require('http');
const fs = require('fs')
 
// Create a server object
const server = http.createServer()
const server1 = http.createServer()
const server2 = http.createServer()
const server3 = http.createServer()
const server4 = http.createServer()


server.on("request",(req, res)=>{
    res.setHeader("Content-type" , "text/html")
    res.write('welcome to port 3951')
     res.end('<h2>Thank you for conecting 3951 port....</h2>')
}).listen(3951 , () =>{
    console.log(`Server Start at http://localhost:3951`);
}) 
server1.on("request",(req, res)=>{
    res.setHeader("Content-type" , "text/html")
    res.write('welcome to port 3952')
    res.end('<h2>Thank you for conecting 3952 port....</h2>')
}).listen(3952 , () =>{
    console.log(`Server Start at http://localhost:3952`);
})
server2.on("request",(req, res)=>{
    res.setHeader("Content-type" , "text/html")
    res.write('welcome to port 3953')
    res.end('<h2>Thank you for conecting 3953 port....</h2>')
}).listen(3953 , () =>{
    console.log(`Server Start at http://localhost:3953`);
})
server3.on("request",(req, res)=>{
    res.setHeader("Content-type" , "text/html")
    res.write('welcome to port 3954')
    res.end('<h2>Thank you for conecting 3954 port....</h2>')
}).listen(3954 , () =>{
    console.log(`Server Start at http://localhost:3954`);
})
server4.on("request",(req, res)=>{
    res.setHeader("Content-type" , "text/html")
    res.write('welcome to port 3955')
    res.end('<h2>Thank you for conecting 3955 port....</h2>')
}).listen(3955 , () =>{
    console.log(`Server Start at http://localhost:3955`);
})

fs.open('task.js' ,(err , result) => {
    if(err)
        console.log(err);
    else
        console.log('File open successfully......');
})
