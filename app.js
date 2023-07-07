const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__diename, 'views', 'home.html')));

app.listem(PORT, () => console.log('Servidor Corriendo en http://localhost:'+PORT));
