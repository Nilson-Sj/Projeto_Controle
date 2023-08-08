
exports.up = (knex) => {
    return knex.schema.createTable('marca', (t) => {
        t.increments('id').primary();
        t.string('nome', 100).notNull()
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('marca');
};
