module.exports = (app) => {
    const findAll = () => {
        return app.db('marca').select();
    };

    const save = (marca) => {
        return app.db('marca').insert(marca, '*');
    };

    return { findAll, save };
};