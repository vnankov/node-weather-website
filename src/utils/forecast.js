const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=fc0ab497a82a1c99a095b70f4338b7e3&query=${latitude},${longitude}&units=f`

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if(body.error) {
            callback('Unable to find location')
        }
        else {
            console.log(body)
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degree out. It feels like ${body.current.feelslike} degrees out.
            The wind speed is ${body.current.wind_speed}km/h and the cloud cover is ${body.current.cloudcover}%`)
        }
    })
}

module.exports = forecast;