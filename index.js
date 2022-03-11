const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));//default serve public/index.html

app.use((req, res, next) => {
    //console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
})

const server = http.createServer(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})