/**
 * Created by michaeldavis on 23/03/2016.
 */
var openWeatherAppId = '',
    openWeatherUrl = '';
var prepareData = function(units){
    var cityName = $('#cityName').val();
    if (cityName != ''){
        getData()

    }
}

function getData(url,cityName,appId,units){
    var request = $.ajax({


    }).fail(function(error){
        console.error(error);
    })
}