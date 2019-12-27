const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan');

const configServer = require('./configs/server');
const routes = require('./routes/index');

let app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use(routes.userRoutes);

const port = process.env.PORT || configServer.port;

app.listen(port, () => {
    console.log('Server running on ', port);
})
