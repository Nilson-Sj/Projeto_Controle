const request = require('supertest');

const app = require('../../src/app');

const MAIN_ROUTE = '/marcas';

let marca;

beforeAll(async () => {
  const res = await app.services.marca.save({ nome: 'Alguma Marca' });
  marca = { ...res[0] };
});

test('Deve listar todas as marcas', () => {
  return app.db('marca')
    .insert({ nome: 'Apple' })
    .then(() => request(app).get(MAIN_ROUTE))
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
  });
});

test('Deve inserir uma marca com sucesso', () => {
  return request(app).post(MAIN_ROUTE)
    .send({ nome: 'Apple' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.nome).toBe('Apple');
  });
});

test('Deve retorna uma marca por nome', () => {
  return app.db('marca')
    .insert({ nome: 'Marca By Name' }, ['nome'])
      .then(marca => request(app).get(`${MAIN_ROUTE}/${marca[0].nome}`))
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.nome).toBe('Marca By Name');
      });
});

test('Deve alterar uma marca', () => {
  return app.db('marca')
  .insert({ nome: 'Marca To Update' }, ['id'])
    .then(marca => request(app).put(`${MAIN_ROUTE}/${marca[0].id}`)
      .send({ nome: 'Marca Updated' }))
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.nome).toBe('Marca Updated');
    });
});

test('Deve remover uma marca', () => {
  return app.db('marca')
  .insert({ nome: 'Marca To Remove' }, ['id'])
    .then(marca => request(app).delete(`${MAIN_ROUTE}/${marca[0].id}`))
    .then((res) => {
      expect(res.status).toBe(204);
    });
});

test('Nao deve inserir marca sem nome', async () => {
  const result = await request(app).post(MAIN_ROUTE)
    .send({ nome: '' })
  .then((res) => {
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Nome é um atributo obrigatório!');
  });
});
