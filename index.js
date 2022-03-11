const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json()); // req.body will be parse

app.use(express.static(__dirname + '/public'));//default serve public/index.html


app.all('/dishes', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  });
  
  app.get('/dishes', (req,res,next) => {
      res.end('Will send all the dishes to you!');
  });
  
  app.post('/dishes', (req, res, next) => {
   res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
  });
  
  app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
  });
   
  app.delete('/dishes', (req, res, next) => {
      res.end('Deleting all dishes');
  });
  
  app.get('/dishes/:dishId', (req,res,next) => {
      res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
  });
  
  app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
  });
  
  app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
          ' with details: ' + req.body.description);
  });
  
  app.delete('/dishes/:dishId', (req, res, next) => {
      res.end('Deleting dish: ' + req.params.dishId);
  });
  

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})