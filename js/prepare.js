/**
 * Created by michaeldavis on 21/03/2016.
 */
var openWeatherAppId = 'GET-YOUR-KEY-AT-OPENWEATHERMAP',
    openWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast'

var prepareData = function(units) {
    var cityName = $('#city-name').val() if (cityName && cityName != ''){
        cityName = cityName.trim()
        getData(openWeatherUrl, cityName, openWeatherAppId, units)
    }
    else {
        alert('Please enter the city name')
    }
}

function getData (url, cityName, appId, units) {
    var request = $.ajax({
        url: url,
        dataType: 'jsonp',
        data: {
            q: cityName,
            appid: appId,
            units: units
        },
        jsonpCallback: 'fetchData',
        type: 'GET'
    }).fail(function(error){
        console.error(error)
        alert('Error sending request')
    })
}

function fetchData(forecast) {
    console.log(forecast)
    var html = '',
        cityName = forecast.city.name,
        country = forecast.city.country
    html += '<h3> Weather Forecast for '
        + cityName
        + ', '
        + country
        + '</h3>'
    forecast.list.forEach(function(forecastEntry, index, list){
        html += '<p>'
            + forecastEntry.dt_txt
            + ': '
            + forecastEntry.main.temp
            + '</p>'
    })
    $('#log').html(html)
}

$(document).ready(function(){
    $('.btn-metric').click(function() {
        prepareData('metric')
    })
    $('.btn-imperial').click(function() {
        prepareData('imperial')
    })
})