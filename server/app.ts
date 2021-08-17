const express = require('express')
const path = require('path')
const app = express()
const { autoLoadRouter } = require('./util/authLoader')
require('./util/mysqlInit')

const core = require('./middleware/Core')
core.init(app)

app.use(express.json())
autoLoadRouter(app, path.join(__dirname, 'controller'))

app.listen(3000, () => {
  console.log("server start! OK!")
})