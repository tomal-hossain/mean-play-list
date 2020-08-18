const express = require('express');
const path = require('path');
require('dotenv/config');
const api = require('./server/routes/api.route')

const app = express();

app.use(express.static(path.join(__dirname, 'dist/PlayList')));

app.use(express.json());
app.use('/api', api)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/PlayList/index.html'));
})

app.listen(process.env.PORT);