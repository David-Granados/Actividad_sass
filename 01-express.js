const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
const port = 4000;
//middleware
app.use(express.static(__dirname + '/public'))

//Motor de plantilla
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use('/', require('./router/rutas'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
