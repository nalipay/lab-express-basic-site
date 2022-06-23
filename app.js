const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/products', function(req, res) {
    res.sendFile(__dirname + '/views/products.html')
})

app.listen(port, function () {
	console.log(`Server listening on port ${port}`)
})