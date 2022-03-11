const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json()); // req.body will be parse

app.use(express.static(__dirname + '/public'));//default serve public/index.html


app.use('/dishes', dishRouter);


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})