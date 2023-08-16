const express = require('express');

module.exports = (app) => {
  const router = express.Router();

    router.get('/', (req, res, next) => {
        app.services.marca.getAll()
          .then(result => res.status(200).json(result))
          .catch(err => next(err));
      });

    router.post('/',  async (req, res, next) => {
      try {
      const result = await app.services.marca.save(req.body);
      return res.status(201).json(result[0]);
      } catch (err) {
        return next(err);
      };
      });

    router.get('/:nome', (req, res, next) => {
        app.services.marca.getByName({ nome: req.params.nome})
          .then(result => res.status(200).json(result))
          .catch(err => next(err));
      });

    router.put('/:id', (req, res, next) => {
        app.services.marca.update(req.params.id, req.body)
          .then(result => res.status(200).json(result[0]))
          .catch(err => next(err));
      });

    router.delete('/:id', (req, res, next) => {
        app.services.marca.remove(req.params.id)
          .then(() => res.status(204).send())
          .catch(err => next(err));
      });

      return router;
};