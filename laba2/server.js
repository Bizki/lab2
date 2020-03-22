var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const messages = []

app.use(jsonParser)
app.use(urlencodedParser)

app.post('/create', function (req, res) {
  const { message } = req.body
  messages.push(message)
  res.json({ message, status: 'created' })
})

app.get('/list', function (req, res) {
  console.log('list', messages.join(','))
  res.send(messages.join(','))
})

app.listen(3000, () => console.log('stated http://localhost:3000'));