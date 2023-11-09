
const http = require('http');

const html=`
<!DOCTYPE html>
<html lang="en">
<body style="background-color:green;">
    <h1>Hello world!</h2>
</body>
</html>`;

const server = http.createServer((req,res) => {
    console.log('request recieved...');
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
  
    if(req.url=='/'){
        res.write(html);
        res.end();
    }else{
        res.statusCode = 404;
        res.end();
    }
    

});

server.listen('3000');