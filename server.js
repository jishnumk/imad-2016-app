var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter + 1;
    res.send(counter.toString());
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo.png'));
});

app.get('/ui/bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg.jpg'));
});

app.get('/ui/bg2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg2.jpg'));
});

app.get('/ui/bg3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg3.jpg'));
});

app.get('/ui/bg4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg4.jpg'));
});

app.get('/ui/me.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.jpg'));
});


app.get('/ui/down.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'down.png'));
});

app.get('/ui/left.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'left.png'));
});

app.get('/ui/right.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'right.png'));
});

app.get('/ui/flash.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'flash.png'));
});

app.get('/ui/mobile-phone.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mobile-phone.png'));
});

app.get('/ui/gmail.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gmail.png'));
});

app.get('/ui/man.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'man.png'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/jquery-3.1.1.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery-3.1.1.min.js'));
});



var names=[];
app.get('/submit-name', function (req, res) {
    var name=req.query.name;
    names.push(name);
    
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
