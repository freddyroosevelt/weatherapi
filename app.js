/*

#Objective of app: Fetch the weather in any city.
-- Fetch the weather in any city using Node.js, Promises & the OpenWeatherMap Api
##Used http://ipinfo.io to fetch the local ip weather
##Used the Open Weather Map Api http://openweathermap.org 

###--- Commands Below ---

#### First run: npm install to get the node modules

####1. How to input any city location:
        (eg:) run --> node app.js --location "San Fran"

####2. How to get user local city address location:
        (eg:) run --> node app.js

####3. Shortcut command to search a location: -l
        (eg:) run --> node app.js -l "New York"

*/

var weather = require('./weather.js');
var location = require('./location.js');
// setup yargs to have a --location or -l arg/command for input
var argv = require('yargs')
    .options('location', {
        alias: 'l',
        demand: false,
        describe: 'Location to fetch weather for',
        type: 'string'
    })
    .help('help')
    .argv;



// If location provided
// call weather location
if(typeof argv.l === 'string' && argv.l.length > 0) {

    // has location
    console.log('Location was provided:');

    weather(argv.l).then(function(currentWeather) {
        console.log(currentWeather);
    }).catch(function(error) {
        console.log(error);
    });

}else {
    // If no location given
    console.log('Location was not provided.');
    //
    console.log('Today in your local city, ');
    location().then(function(loc) {
        // fetch the weather
        return weather(loc.city);
    }).then(function(currentWeather) {
        console.log(currentWeather);
    }).catch(function(error) {
        console.log(error);
    });
}