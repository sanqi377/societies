const express = require('express')
const path = require('path')
const app = express()
const autoLoadRouter = require('./util/authLoader')

autoLoadRouter(app, path.join(__dirname, 'controller'))

app.listen(3000, () => {
  console.log("OK!")
})