const http = require('http')
const url = require('url')
const string = require('string_decoder').StringDecoder
const server = http.createServer(function (req, res) {

    res.end('Hello Node Js');
    console.log("Done");
})
server.listen(3000, function () {
    console.log("the server is listening on port 3000 now ");
})