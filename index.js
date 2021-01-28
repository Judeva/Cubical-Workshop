const express = require('express');

const config = require('./config/config');
const routes = require('./routes');
const app = express();
require('./config/express')(app);

process.on('SIGINT', () => { console.log('exiting…'); process.exit() });

process.on('exit', () => { console.log('exiting…'); process.exit() });

app.use(routes);

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));