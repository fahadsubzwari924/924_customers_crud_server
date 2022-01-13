// http://124.109.63.195

const dev = {
    username: 'root',
    password: '',
    database: "customers_crud_finlex",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 10,
        min: 0,
        idle: 10000,
    },
    define: {
        freezeTableName: true,
        timestamps: true,
    }
};


const prod = {
    username: 'root',
    password: '',
    database: "customers_crud_finlex",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 10,
        min: 0,
        idle: 10000,
    },
    define: {
        freezeTableName: true,
        timestamps: true,
    }
};

module.exports = {
    dev,
    prod
};