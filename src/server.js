require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const PORT = 3001;
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/file',express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

app.use(require('./routes'));

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`)
});