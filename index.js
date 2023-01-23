const express = require('express')

const app = express()

app.get('/', function(req, res){
    res.send("Hello World")
})

app.get('/mac', function(req, res){
    res.send("Hello from macbook")
})

app.listen(3000, function(req, res){
    console.log("Server is up and running at PORT : 3000")
})