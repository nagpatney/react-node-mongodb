// import http from 'http';

// const server = http.createServer();

// server.listen(8080);

// server.on('request',(req,res) =>{
//     res.write('HelloHttp\n');
//     setTimeout(()=>{
//         res.write(' Stream\n');
//         res.end()
//     },3000)
// })

import config from './config';
import apiRouter from './api';
// import fs from 'fs';

import express from 'express';
const server = express();

server.set('view engine','ejs');

server.get('/',(req,res)=>{
    res.render('index',{
        content:'Hello from <em>EJS</em>'
    });
})
server.use('/api',apiRouter)
server.use(express.static('public'));


// server.get('/about.html',(req,res) =>{
//     fs.readFile('./about.html',(err,data) =>{
//         res.send(data.toString())
//     })
// });

server.listen(config.port, ()=>{
    console.log('express on port',config.port)
});
