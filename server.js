/*
const express = require('express');

const app = express();
const PORT = process.env.PORT;
const server = app.listen(process.env.PORT || PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error on server ${err}`));

app.get('/', (_req, res) => res.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>'));

let visitas = 0;
app.get('/visitas', (_req, res) => res.send(`La cantidad de visitas es ${visitas++}`));

let fyh = new Date().toLocaleString();
app.get('/fyh', (_req, res) => res.send({ fyh }));

app.get('*', (_req, res) => res.send('Opción no válida!'));
*/

const http = require("http");
require('dotenv').config()

const server = http.createServer((_req, res)=>{
    res.end("Holllllllllllllllllllllllas ");
});

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`Servidor Corriendo en el puerto ${PORT}`)
})