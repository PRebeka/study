

async function getWeatherDetails(){
    try{
        const cityData = document.getElementById("searchBar").value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=e227093e53c48af4bc7c113307eb95ec&units=metric`)
            if(!response.ok){
                throw new Error("Could not fetch data");
            }
        const data = await response.json();
        console.log(data);

        const temperature = document.getElementById("currentTemp");
        temperature.innerHTML = Math.round(data.main.temp) + "°C";

        const cityName = document.getElementById("currentCountry");
        cityName.innerHTML = data.name;

        const humidity = document.getElementById("humidityPercentage");
        humidity.innerHTML = data.main.humidity + "%";

        const windSpeed = document.getElementById("windPercentage");
        windSpeed.innerHTML = data.wind.speed + "km/h";

        const weatherImage = document.getElementById("currentWeatherImg");
        if(data.weather[0].main == 'Clouds'){
            weatherImage.src = "images/clouds.png";
        }
        else if(data.weather[0].main == 'Clear'){
            weatherImage.src = "images/clear.png";
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherImage.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == 'Mist'){
            weatherImage.src = "images/mist.png";
        }
        else if(data.weather[0].main == 'Rain'){
            weatherImage.src = "images/rain.png";
        }
        else if(data.weather[0].main == 'Snow'){
            weatherImage.src = "images/snow.png";
        }

    }
    catch (error){
        console.error(error);
    }
}

let input = document.getElementById("searchBar");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

console.log("teszt");
