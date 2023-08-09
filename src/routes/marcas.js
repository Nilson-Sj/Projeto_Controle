module.exports = (app) => {
    const getAll = (req, res) => {
        app.services.marca.getAll()
          .then(result => res.status(200).json(result))
      };

    const create = async (req, res) => {
      const result = await app.services.marca.save(req.body);
      if(result.error) return res.status(400).json(result);
       return res.status(201).json(result[0]);
      };

      const getByName = (req, res) => {
        app.services.marca.getByName({ nome: req.params.nome})
          .then(result => res.status(200).json(result));
      };

      return { getAll, create, getByName };
};