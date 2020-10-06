var PORT = process.env.PORT || 5000;
const express = require('express');
const path = require('path');

const app = express();


app.use('/static', express.static('public'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT,'0.0.0.0');