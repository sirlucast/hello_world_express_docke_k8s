const express = require('express')
const os = require("os")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hola Mundo desde: ${os.hostname()}!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})