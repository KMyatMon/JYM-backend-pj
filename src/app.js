// console.log('hello jsond')

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello mson');
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log('server is Running ..');
// });

//import {v4 as uuidv4} from 'uuid; type module
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());