const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

const app = express()

const DATA_FILE = path.join(__dirname, 'data.json')
app.set('port', (process.env.PORT || 3001))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.get('/api/movies', (req, res) => {
  fs.readFile(DATA_FILE, (err, movies) => {
    if (err) { console.log(err)}

    console.log('runnig')
    res.setHeader('Cache-Control', 'no-cachce')
    res.json(JSON.parse(movies))
  })
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
