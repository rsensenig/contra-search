const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/index-routes');
const methodOverride = require('method-override');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(routes);
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});