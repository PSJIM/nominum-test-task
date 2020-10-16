/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const jsonfile = require('jsonfile');

const app = express();

app.use(express.json());
app.use(cors());

let categories = 'internal server error';
jsonfile.readFile('./categories.json')
  // eslint-disable-next-line no-return-assign
  .then((file) => categories = file)
  .catch(() => console.log('Microserver error - file not found'))

app.get('/categories', (req, res) => {
  res.send(categories)
})

app.listen(3001, () => console.log('Microserver is listening on 3001'))
