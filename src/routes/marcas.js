module.exports = (app) => {
    const findAll = (req, res) => {
        app.db('marca').select()
        .then(result => res.status(200).json(result))
      };

      const create = async (req, res) => {
      const result = await app.db('marca').insert(req.body, '*');
       res.status(201).json(result[0]);
      };

      return { findAll, create };
};