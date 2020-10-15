const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const jsonfile = require('jsonfile');

app.use(express.static('public'));
app.use(cors());

let categories = 'internal server error';
jsonfile.readFile('./categories.json')
    .then(file => categories = file)
    .catch(() => console.log('Microserver error - file not found'))

app.get('/categories', (req, res) => {
    res.send(categories)
    }
)

server.listen(3001, () => console.log('Microserver is listening on 3001'))
