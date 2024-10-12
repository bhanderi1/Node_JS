const http = require('http')

const data = [
    {
        id: 1, name: 'John', age: 11
    },
    {
        id: 2, name: 'Jock', age: 12
    },
    {
        id: 3, name: 'Johny', age: 13
    },
    {
        id: 4, name: 'Jolly', age: 14
    },
]

const server = http.createServer()

server.on("request", (req, res) => {
    // console.log(req.url);
    let item = req.url.split("/")
    console.log(item);
    if (item[1] === "user") {
        res.setHeader("Content-type", "text/html")
        res.write('<h2>Welcome to the user pages...</h2>')
    }
    else if (item[1] === "admin") {
        res.setHeader("Content-type", "text/html")
        res.write('<h2>Welcome to the Admin pages...</h2>')
        res.end()
    }
    else if (item[1] === "friends") {
        res.setHeader("Content-type", "application/json")
        if (item.length === 3) {
            let friIndex = +item[2]
            res.write(JSON.stringify(data.filter(e => e.id === friIndex)))
        }
        else {
            res.write(JSON.stringify(data))
            res.end()
        }
    }
    else {
        res.setHeader("Content-type", "text/html")
        res.write('<h2 style = "color:red">Page Not Found...</h2>')
        res.end()
    }
})

server.listen(1111, () => {
    console.log(`Server start at http://127.0.0.1:1111 `);

})