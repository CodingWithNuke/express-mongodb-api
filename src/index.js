require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

require('./routes')(app);

const { routeNotFound, errorHandler } = require('./middlewares');
app.use(routeNotFound);
app.use(errorHandler);

require('./database')

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express API running on http://localhost:${port}`));