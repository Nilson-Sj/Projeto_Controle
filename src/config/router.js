const express = require('express');

module.exports = (app) => {

    const protectedRouter = express.Router();

    protectedRouter.use('/marcas', app.routes.marcas);

    app.use('/v1', protectedRouter);
};