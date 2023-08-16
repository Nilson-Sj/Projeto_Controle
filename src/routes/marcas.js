module.exports = (app) => {
    const getAll = (req, res, next) => {
        app.services.marca.getAll()
          .then(result => res.status(200).json(result))
          .catch(err => next(err));
      };

    const create = async (req, res, next) => {
      try {
      const result = await app.services.marca.save(req.body);
      return res.status(201).json(result[0]);
      } catch (err) {
        return next(err);
      };
    };

      const getByName = (req, res, next) => {
        app.services.marca.getByName({ nome: req.params.nome})
          .then(result => res.status(200).json(result))
          .catch(err => next(err));
      };

      const update = (req, res, next) => {
        app.services.marca.update(req.params.id, req.body)
          .then(result => res.status(200).json(result[0]))
          .catch(err => next(err));
      };

      const remove = (req, res, next) => {
        app.services.marca.remove(req.params.id)
          .then(() => res.status(204).send())
          .catch(err => next(err));
      }

      return { getAll, create, getByName, update, remove };
};