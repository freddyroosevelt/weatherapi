// Weather.js
var request = require('request');

module.exports = function(location) {
    return new Promise(function(resolve, reject) {
        var encodedLocation = encodeURIComponent(location);
        // Get the weather url from user input thats encoded
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial';

        if(!location) {
            return reject('No location provided.');
        }

        request({
            url: url,
            json: true
        }, function(error, response, body) {
            // Error
            if(error) {
                //console.log('Unable to fetch the weather.');
                reject('Unable to fetch the weather.');
            }else {
                // Log the weather
                console.log('Here is the current weather: ');

                resolve('It\'s ' + body.main.temp + ' in ' + body.name + ', City' + '.');
            }
        });
    });
};
