module.exports = (app) => {
    const getAll = (req, res) => {
        app.services.marca.getAll()
          .then(result => res.status(200).json(result))
      };

    const create = async (req, res) => {
      try {
      const result = await app.services.marca.save(req.body);
      return res.status(201).json(result[0]);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      };
    };

      const getByName = (req, res) => {
        app.services.marca.getByName({ nome: req.params.nome})
          .then(result => res.status(200).json(result));
      };

      const update = (req, res) => {
        app.services.marca.update(req.params.id, req.body)
          .then(result => res.status(200).json(result[0]));
      };

      const remove = (req, res) => {
        app.services.marca.remove(req.params.id)
          .then(() => res.status(204).send());
      }

      return { getAll, create, getByName, update, remove };
};