const ValidationError = require('../errors/ValidationError');

module.exports = (app) => {
    const getAll = () => {
        return app.db('marca')
        .select();
    };

    const getByName = (filter = {}) => {
        return app.db('marca')
        .where(filter)
        .first();
    };

    const save = (marca) => {
    if(!marca.nome) throw new ValidationError ( 'Nome é um atributo obrigatório!' );
        return app.db('marca')
        .insert(marca, '*');
    };

    const update = (id, marca) => {
        return app.db('marca')
        .where({ id })
        .update(marca, '*');
    };

    const remove = (id) => {
        return app.db('marca')
        .where({ id })
        .del();
    };

    return { getAll, save, getByName, update, remove };
};