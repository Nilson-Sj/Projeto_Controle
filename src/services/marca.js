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
    if(!marca.nome) return { error: 'Nome é um atributo obrigatório!'};
        return app.db('marca')
        .insert(marca, '*');
    };

    return { getAll, save, getByName };
};