const express = require('express')
const router = require('../routes/routes.js')
const app = express()
const PORT = 8080

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/productos', router)

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

server.on("error", (err) => {
  console.log( `El servidor a tenido un error:${error}`)
})