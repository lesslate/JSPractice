const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "d64a76779ab856671c465659902ee2d2";



function getWeather(lat, lng)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function (response)
        {
            return response.json();
        })
        .then(function (json)
        {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}



function handelGeoSuccess(pos)
{
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const coordsObj =
    {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handelGeoError()
{
    console.log("can't Access");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handelGeoSuccess, handelGeoError);
}


function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null)
    {
        askForCoords();
    }
    else
    {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}






function init()
{
    loadCoords();
}

init();