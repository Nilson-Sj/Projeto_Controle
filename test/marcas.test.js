const request = require('supertest');

const app = require('../src/app');

test('Deve listar todas as marcas', () => {
  return request(app).get('/marcas')
  .then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toHaveProperty('nome');
  });
});