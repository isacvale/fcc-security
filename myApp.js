const express = require('express')
const app = express()

const xDaysInSeconds = days => days * 24 * 60 * 60
const ninetyDaysInSeconds = xDaysInSeconds(90)

module.exports = app
const api = require('./server.js')
app.use(express.static('public'))
app.disable('strict-trnasport-security')
app.use('/api', api)
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html')
})
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('App listenas @ ' + listener.address().port())
})