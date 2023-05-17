const http = require('http');

const url = require('url');

const StringDecoder = require('string_decoder').StringDecoder;
http.createServer((req, res)=>{
    res.end('hees lo')
    console.log('oke')
    let parseurl = url.parse(req.url,true)
    let queryString = parseurl.query;
    console.log(queryString);


}).listen(3000,'localhost',()=>{
    console.log('http://localhost:3000')
})
