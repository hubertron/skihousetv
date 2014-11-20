var keystone, loveland, beavercreek, abasin, breck, copper, steamboat, vail, winterpark = {}


(function () {
  $.getJSON('https://jsonp.nodejitsu.com/?url=http%3A%2F%2Fopensnow.com%2Fapi%2Fpublic%2F1.0%2Flocations%2Fdata%3Fapikey%3Dhubert%26lids%3D2%2C5%2C6%2C7%2C3%2C1%2C13%2C15%2C16%26type%3Djson&callback=', 
            function(response){
                console.log(response.results.location1.meta.name);
                console.log(response.results.location2.meta.name);
                console.log(response.results.location3.meta.name);
                console.log(response.results.location5.meta.name);
                console.log(response.results.location6.meta.name);
                console.log(response.results.location7.meta.name);
                console.log(response.results.location13.meta.name);
                console.log(response.results.location15.meta.name);
                console.log(response.results.location16.meta.name);
            });
})()



