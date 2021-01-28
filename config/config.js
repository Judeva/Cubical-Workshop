const config = {
    development: {
        PORT: 1810,
    },
    production: {
        PORT: 80,
    }
};

module.exports = config[process.env.NODE_ENV]