const request = require('supertest');

const app = require('../../src/app');

test('Deve listar todas as marcas', () => {
  return request(app).get('/marcas')
  .then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

test('Deve inserir marca com sucesso', () => {
  return request(app).post('/marcas')
  .send({ nome: 'Positivo' })
  .then((res) => {
    expect(res.status).toBe(201);
    expect(res.body.nome).toBe('Positivo');
  });
});

test('Nao deve inserir marca sem nome', async () => {
  const result = await request(app).post('/marcas')
  .send({ nome: '' })
  .then((res) => {
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Nome é um atributo obrigatório!')
  });
});
