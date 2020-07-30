const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'KoKo'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'KoKo'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        text: 'This is sample text'
    });
});

app.get('/weather', (req, res) => {
    res.send('Weather  Page');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000')
}); 