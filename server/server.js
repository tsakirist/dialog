const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname + '/../client/views/'));
app.locals.pretty = true;

app.use(express.static(path.resolve(__dirname + '/../node_modules/')));
app.use(express.static(path.resolve(__dirname + '/../client')));

app.get('/templates/:templateName', (req, res) => {
    res.render(req.params.templateName);
});
app.get('*', (req, res) => {
    res.render('index');
});

app.listen(3000, (err) => {
    if(!err) console.log('Started server at 3000');
});
