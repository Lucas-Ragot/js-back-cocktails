require('dotenv').config();
const express = require('express');

const router = require('./router');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(process.env.PORT, _ => {
    console.log(`Server ready : http://localhost:${PORT}`);
});