// console.log("Hello World");
const http= require('http');
const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.write('Hello World!');
    res.end();
})

server.listen(3000,()=>{
    console.log('Server running on port'+ PORT);
})