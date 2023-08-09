module.exports = (app) => {
    app.route('/marcas')
        .get(app.routes.marcas.getAll)
        .post(app.routes.marcas.create);

    app.route('/marcas/:nome')
        .get(app.routes.marcas.getByName);

    app.route('/marcas/:id')
        .put(app.routes.marcas.update)
        .delete(app.routes.marcas.remove);
}