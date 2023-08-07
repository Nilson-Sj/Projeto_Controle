const app = require('express')();

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/marcas', (req, res) => {
  const marcas = [
    { nome: 'BMW' },
  ];
  res.status(200).json(marcas);
});

module.exports = app;