module.exports = (app) => {
    app.route('/marcas')
    .get(app.routes.marcas.findAll)
    .post(app.routes.marcas.create);
}