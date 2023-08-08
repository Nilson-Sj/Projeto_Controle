module.exports = () => {
    const findAll = (req, res) => {
        const marcas = [
          { nome: 'Acer' },
          { nome: 'Samsung' },
          { nome: 'Dell' },
          { nome: 'Asus' },
          { nome: 'Lenovo' },
          { nome: 'Apple' },
        ];
        res.status(200).json(marcas);
      };

      const create = (req, res) => {
       res.status(201).json(req.body);
      };

      return { findAll, create };
};