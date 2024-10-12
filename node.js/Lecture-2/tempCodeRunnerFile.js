const server = http.createServer((req, res) => {
    res.setHeader("Content-type" , "text/html")

    res.write('Welcome to NodeJS');
    // res.end('<h1>Thanks for Connecting..</h1>');
    res.setHeader("dummy" ,"hello  world");
    // res.setHeader('Content-type' , "application/json")
    res.end('<h2>Hello</h2>')
})