const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/show', (req, res) => {
  // console.log('Hello again...')
  console.log(req.body)
})

app.listen(port = 3333, function () {
    console.log(`server running on port ${port}`)
})