const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// For testing:
app.get('/', (req, res) => {
    res.render('pages/index');
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});