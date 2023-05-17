
let http = require('http');
let url = require('url');
let handlers = {}
let fs = require('fs');
const server = http.createServer((req, res)=>{
    let paresUrl = url.parse(req.url,true);
    let path = paresUrl.path
    let trimPath = path.replace(/^\/+|\/+$/g, "");
    // req.on("data", (data)=>{
    //
    // })
    // req.on("end",(end)=>{
        let chosenHandler  = (typeof (route[trimPath])!=="undefined")?route[trimPath]:handlers.notFound
        chosenHandler (req, res);


    // })
})
server.listen(3000, function () {
    console.log('server running at localhost:3000 ')
});
handlers.products = function (rep, res) {
    fs.readFile('./products.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};
// handlers.users page


handlers.users = function (rep, res) {
    fs.readFile('./users.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

// not found


handlers.notFound = function (rep, res) {
    fs.readFile('./notfound.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};
let route = {
    'users': handlers.users,
    'products': handlers.products
}

