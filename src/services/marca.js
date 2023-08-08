module.exports = (app) => {
    const findAll = () => {
        return app.db('marca').select();
    };

    const save = (marca) => {

    if(!marca.nome) return { error: 'Nome é um atributo obrigatório!'};

        return app.db('marca').insert(marca, '*');
    };

    return { findAll, save };
};