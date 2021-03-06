const apiKey = "SvUtQt7JEcYzRFyXh0G6YoEbyWU8oaHmZvOG1S4C";

let selectEl = $(".select");
let parksContainerEl = $("#parks-container");
let parksHeaderEl = $(".parks-header");
let parksListEl = $(".parks-list");


let stateArr = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

let stateAbrArr = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

bulmaCarousel.attach("#carousel", {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true
});




//weather


function checkWeather() {
    var settings ={
        "async": true,
        "crossDomain": true,
        "dataType": "json",
        "url": "http://api.openweathermap.org/data/2.5/weather?zip=82190,us&appid=da25d74f97cef3d0289a4a9c43c9c6af&units=imperial",
        "method": "GET"
    };
    $.ajax(settings)

    .done(function (response) {
        console.log(response);

        $("#wind_speed").append (response.wind.speed);
        $("#main_temp").append (response.main.temp);
        $("#weather_conditions").append (response.weather[0].main);
        $("#wind_speed_unit").append (" MPH");
        $("#main_temp_unit").append (" F");
    });
}
function checkWeather() {
    var settings ={
        "async": true,
        "crossDomain": true,
        "dataType": "json",
        "url": "http://api.openweathermap.org/data/2.5/weather?zip=44405,us&appid=da25d74f97cef3d0289a4a9c43c9c6af&units=imperial",
        "method": "GET"
    };
    $.ajax(settings)

    .done(function (response) {
        console.log(response);

        $("#wind_speed1").append (response.wind.speed);
        $("#main_temp1").append (response.main.temp);
        $("#weather_conditions1").append (response.weather[0].main);
        $("#wind_speed_unit").append (" MPH");
        $("#main_temp_unit").append (" F");
    });
}
function checkWeather() {
    var settings ={
        "async": true,
        "crossDomain": true,
        "dataType": "json",
        "url": "http://api.openweathermap.org/data/2.5/weather?zip=44512,us&appid=da25d74f97cef3d0289a4a9c43c9c6af&units=imperial",
        "method": "GET"
    };
    $.ajax(settings)

    .done(function (response) {
        console.log(response);

        $("#wind_speed2").append (response.wind.speed);
        $("#main_temp2").append (response.main.temp);
        $("#weather_conditions2").append (response.weather[0].main);
        $("#wind_speed_unit").append (" MPH");
        $("#main_temp_unit").append (" F");
    });
}




// parks
let displayParks = function(parks, state) {
    parksHeaderEl.text("");
    parksListEl.text("");

    if (parks.length === 0) {
        parksListEl.textContent = "This state has no parks.";
        return;
    }

    parksHeaderEl.text("National Parks in " + state);

    for (let i = 0; i < parks.length; i++) {
        let listItemEl = $("<li>")
            .addClass("box");

        // create a link element to take users to the park website
        let parkEl = $("<a>")
            .attr("href", parks[i].url)
            .attr("target", "_blank");

        // create span to hold park name
        let nameEl = $("<span>")
            .text(parks[i].fullName)
            .addClass("has-text-black is-size-5");

        // append to containers
        parkEl.append(nameEl);
        listItemEl.append(parkEl)
        parksListEl.append(listItemEl);
    }
};

addStateDropdown();