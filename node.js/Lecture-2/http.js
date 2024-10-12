// HTTP Module

const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader("Content-type" , "text/html")
    res.write('Welcome to NodeJS');
    res.end('<h1>Thanks for Connecting..</h1>');
    // res.setHeader("dummy" ,"hello  world");
    // res.setHeader('Content-type' , "application/json")
    // res.end('<h2>Hello</h2>')
})

// const server = http.createServer()
// server.on("request",(req, res)=>{
//     res.setHeader("Content-type" , "text-html")
//     res.write('welcome to nodejs')
//     res.end('<h1>Thanks for Connecting..</h1>')
//     res.setHeader("dummy","hello world")
//     res.setHeader("Content-type" , "application/json")
//     res.end('<h2>Hello</h2>')
// })

server.listen(3950 , () =>{
    console.log(`Server Start at http://localhost:3950`);
})
