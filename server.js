import http from 'http';

const server = http.createServer();

server.listen(8080);

server.on('request',(req,res) =>{
    res.write('HelloHttp\n');
    setTimeout(()=>{
        res.write(' Stream\n');
        res.end()
    },3000)
})