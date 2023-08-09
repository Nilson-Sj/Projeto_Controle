module.exports = (app) => {
    app.route('/marcas')
        .get(app.routes.marcas.getAll)
        .post(app.routes.marcas.create);

    app.route('/marcas/:nome')
        .get(app.routes.marcas.getByName);
}