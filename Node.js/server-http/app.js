const http = require('http')

http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('hello')
    }
}).listen(5000)