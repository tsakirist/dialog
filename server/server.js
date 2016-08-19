const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname + '/../client'));
app.locals.pretty = true;

app.use('/node_modules', express.static('../node_modules/'));
app.use(express.static('../client/'));

app.get('*', (req, res) => {
    // res.sendFile(path.resolve(__dirname + '/../client/index.pug'));
    res.render('index', {
        name: 'Tryfon'
    });
});

app.listen(3000, (err) => {
    if(!err) console.log('Started server at 3000');
});