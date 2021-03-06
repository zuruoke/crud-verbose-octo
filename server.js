const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Crud Application');
});

app.listen(PORT, () => console.log('Server is running on express'));
