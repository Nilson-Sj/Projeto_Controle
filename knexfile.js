module.exports = {
    test: {
        client:'pg',
        version: '9.6',
        connection: {
            host:'localhost',
            user: 'postgres',
            password: '123456',
            database: 'projeto_controle'
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};