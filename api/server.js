const express = require('express');

const Marvel = require('../marvel/marvelModel.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/marvel', (req, res) => {
  Marvel.getAll()
    .then(characters => {
      res.status(200).json(characters);
    })
    .catch(err => {
      res.status(500).json(err);
    })
})
