const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {

        var encodedAddress = encodeURIComponent(address);
        var apiKey = apiKey;
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect");
            } else if (body.status === 'OK') {
                resolve(undefined, {
                    address: body.result[0].formatted_address,
                    latitude: body.result[0].geometry.location.lat,
                    longitude: body.result[0].geometry.location.lng
                })
            } else {
                reject(body.status);
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage)
})