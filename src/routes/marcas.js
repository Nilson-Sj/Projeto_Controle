module.exports = (app) => {
    const findAll = (req, res) => {
        app.services.marca.findAll()
          .then(result => res.status(200).json(result))
      };

    const create = async (req, res) => {
      const result = await app.services.marca.save(req.body);
       res.status(201).json(result[0]);
      };

      return { findAll, create };
};