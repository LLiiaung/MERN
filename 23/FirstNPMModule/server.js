const http = require('http')
http.createServer(function(req, res) {
    res.end('This is npm nodemon module')
}).listen(5000)