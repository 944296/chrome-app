const API_KEY = "37bebfd3f986e08e1179565bd018d7e9"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
     .then((response) => response.json())
     .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
     })
}

function onGoErr(){
    alert("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGoErr);