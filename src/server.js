require('dotenv').config();
require('./apps/database/index.js')
const routes = require('./routes');
const express = require("express");

const app = express();

app.use(express.json());
app.use(routes)

const portadb = process.env.DB_PORT
const PORT = process.env.PORT
console.log(portadb)
console.log(`${PORT}`)
app.listen(PORT, ()=>{
    console.log(`rodando na porta ${PORT}`);
})