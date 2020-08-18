const express = require('express');
const api = express();
const mongoose = require('mongoose');
const videoRoute = require('./video.route');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  })


api.use('/video', videoRoute);

module.exports = api