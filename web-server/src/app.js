const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialsPath);

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
        name: 'KoKo',
        text: 'This is sample text'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'KoKo',
        errorMessage: 'Help article not found.'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address || !req.query.apiKeyMap || !req.query.apiKeyWeather) {
        res.send({
            error: 'You must provide all.'
        });
    } else {
        geocode.geocodeAddress(req.query.address, req.query.apiKeyMap, (error, mapResults) => {
            if (error) {
                res.send({
                    nameSpace: 'map',
                    error
                });
            } else {
                console.log(JSON.stringify(mapResults, undefined, 2));
                weather.getWeather(mapResults.latitude, mapResults.longitude, req.query.apiKeyWeather, (error, weatherResult) => {
                    if (error) {
                        res.send({
                            nameSpace: 'weather',
                            error
                        });
                    } else {
                        console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}.`);
                        res.send({
                            forecast: `It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}.`,
                            location: req.query.address,
                            address: mapResults.address
                        });
                    }
                });
            }
        });
    }
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'KoKo',
        errorMessage: 'It is not found.'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000')
}); 