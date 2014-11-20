var keystone = {};
var loveland = {};
var beavercreek = {};
var abasin = {};
var breck = {};
var copper = {};
var steamboat = {};
var vail = {};
var winterpark = {};


(function () {
  $.getJSON('https://jsonp.nodejitsu.com/?url=http%3A%2F%2Fopensnow.com%2Fapi%2Fpublic%2F1.0%2Flocations%2Fdata%3Fapikey%3D!!!!!!!!!%26lids%3D2%2C5%2C6%2C7%2C3%2C1%2C13%2C15%2C16%26type%3Djson&callback=', 
            function(response){
              // Loveland
                loveland.name = response.results.location1.meta.name;
                loveland.temp = response.results.location1.current_conditions.temp;
                loveland.todaysnow = response.results.location1.forecast.period1.day.snow;
                loveland.todaytemp = response.results.location1.forecast.period1.day.temp;
                loveland.tonightsnow = response.results.location1.forecast.period1.night.snow;
                loveland.tomorrowsnow =  response.results.location1.forecast.period2.day.snow;
                loveland.tonighttemp = response.results.location1.forecast.period1.night.temp;
                loveland.tomorrowtemp =  response.results.location1.forecast.period2.day.temp;

              // ABasin
                abasin.name = response.results.location2.meta.name;
                abasin.temp = response.results.location2.current_conditions.temp;
                abasin.todaysnow = response.results.location2.forecast.period1.day.snow;
                abasin.todaytemp = response.results.location2.forecast.period1.day.temp;
                abasin.tonightsnow = response.results.location2.forecast.period1.night.snow;
                abasin.tomorrowsnow =  response.results.location2.forecast.period2.day.snow;
                abasin.tonighttemp = response.results.location2.forecast.period1.night.temp;
                abasin.tomorrowtemp =  response.results.location2.forecast.period2.day.temp;

              // Keystone
                keystone.name = response.results.location3.meta.name;
                keystone.temp = response.results.location3.current_conditions.temp;
                keystone.todaysnow = response.results.location3.forecast.period1.day.snow;
                keystone.todaytemp = response.results.location3.forecast.period1.day.temp;
                keystone.tonightsnow = response.results.location3.forecast.period1.night.snow;
                keystone.tomorrowsnow =  response.results.location3.forecast.period2.day.snow;
                keystone.tonighttemp = response.results.location3.forecast.period1.night.temp;
                keystone.tomorrowtemp =  response.results.location3.forecast.period2.day.temp;

              // Beaver Creek
                beavercreek.name = response.results.location5.meta.name;
                beavercreek.temp = response.results.location5.current_conditions.temp;
                beavercreek.todaysnow = response.results.location5.forecast.period1.day.snow;
                beavercreek.todaytemp = response.results.location5.forecast.period1.day.temp;
                beavercreek.tonightsnow = response.results.location5.forecast.period1.night.snow;
                beavercreek.tomorrowsnow =  response.results.location5.forecast.period2.day.snow;
                beavercreek.tonighttemp = response.results.location5.forecast.period1.night.temp;
                beavercreek.tomorrowtemp =  response.results.location5.forecast.period2.day.temp;

              // Breckenridge
                breck.name = response.results.location6.meta.name;
                breck.temp = response.results.location6.current_conditions.temp;
                breck.todaysnow = response.results.location6.forecast.period1.day.snow;
                breck.todaytemp = response.results.location6.forecast.period1.day.temp;
                breck.tonightsnow = response.results.location6.forecast.period1.night.snow;
                breck.tomorrowsnow =  response.results.location6.forecast.period2.day.snow;
                breck.tonighttemp = response.results.location6.forecast.period1.night.temp;
                breck.tomorrowtemp =  response.results.location6.forecast.period2.day.temp;

              // Copper
                copper.name = response.results.location7.meta.name;
                copper.temp = response.results.location7.current_conditions.temp;
                copper.todaysnow = response.results.location7.forecast.period1.day.snow;
                copper.todaytemp = response.results.location7.forecast.period1.day.temp;
                copper.tonightsnow = response.results.location7.forecast.period1.night.snow;
                copper.tomorrowsnow =  response.results.location7.forecast.period2.day.snow;
                copper.tonighttemp = response.results.location7.forecast.period1.night.temp;
                copper.tomorrowtemp =  response.results.location7.forecast.period2.day.temp;

              // Steamboat
                steamboat.name = response.results.location13.meta.name;
                steamboat.temp = response.results.location13.current_conditions.temp;
                steamboat.todaysnow = response.results.location13.forecast.period1.day.snow;
                steamboat.todaytemp = response.results.location13.forecast.period1.day.temp;
                steamboat.tonightsnow = response.results.location13.forecast.period1.night.snow;
                steamboat.tomorrowsnow =  response.results.location13.forecast.period2.day.snow;
                steamboat.tonighttemp = response.results.location13.forecast.period1.night.temp;
                steamboat.tomorrowtemp =  response.results.location13.forecast.period2.day.temp;

              // Vail
                vail.name = response.results.location15.meta.name;
                vail.temp = response.results.location15.current_conditions.temp;
                vail.todaysnow = response.results.location15.forecast.period1.day.snow;
                vail.todaytemp = response.results.location15.forecast.period1.day.temp;
                vail.tonightsnow = response.results.location15.forecast.period1.night.snow;
                vail.tomorrowsnow =  response.results.location15.forecast.period2.day.snow;
                vail.tonighttemp = response.results.location15.forecast.period1.night.temp;
                vail.tomorrowtemp =  response.results.location15.forecast.period2.day.temp;

              // Winter Park
                winterpark.name = response.results.location16.meta.name;
                winterpark.temp = response.results.location16.current_conditions.temp;
                winterpark.todaysnow = response.results.location16.forecast.period1.day.snow;
                winterpark.todaytemp = response.results.location16.forecast.period1.day.temp;
                winterpark.tonightsnow = response.results.location16.forecast.period1.night.snow;
                winterpark.tomorrowsnow =  response.results.location16.forecast.period2.day.snow;
                winterpark.tonighttemp = response.results.location16.forecast.period1.night.temp;
                winterpark.tomorrowtemp =  response.results.location16.forecast.period2.day.temp;

  
                console.log(keystone);
                console.log(winterpark.name)

                 $( ".inner" ).append( winterpark.name + " is currently " + winterpark.temp + "F  with " + winterpark.todaysnow + "IN of snow expected");

            });

 
})()



//, loveland, beavercreek, abasin, breck, copper, steamboat, vail, winterpark