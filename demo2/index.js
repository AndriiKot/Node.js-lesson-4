﻿const http = require('http')
const port = 8000

const server = http.createServer((req,res) => {
  res.end("Hello, World!");  
})

server.listen(port, () => {
  console.log('Server listering on: http://localhost:%s',port);
})