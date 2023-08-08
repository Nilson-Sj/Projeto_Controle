const app = require('express')();

const bodyParser = require('body-parser');

app.use (bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/marcas', (req, res) => {
  const marcas = [
    { nome: 'Acer' },
    { nome: 'Samsung' },
    { nome: 'Dell' },
    { nome: 'Asus' },
    { nome: 'Lenovo' },
    { nome: 'Apple' },
  ];
  res.status(200).json(marcas);
});

app.post('/marcas', (req, res) => {
 res.status(201).json(req.body);
});

module.exports = app;