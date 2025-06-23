const options = {
	method: 'GET',
	headers: {
		//'x-rapidapi-key': 'de9490d9d3msh4184ff6b3384db6p1edda6jsn2b8ef2401d6e',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};
    let inputValue = ""; // Declare variable to hold the value
    // button click event listener
    document.getElementById('printBtn').addEventListener('click', function () {
        event.preventDefault();
        inputValue = document.getElementById('inp_city').value;
    //  Api call to fetch weather data
        fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${inputValue}&format=json&u=c`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                let forecast = response.forecasts[0];
                document.getElementById('main').innerHTML = forecast.high;
                document.getElementById('main2').innerHTML = forecast.low;
                document.getElementById('main3').innerHTML = forecast.text;
        let location = response.location;
        document.getElementById('city').innerHTML = location.city;

        // Weather icon and color logic
        const weatherText = forecast.text.trim();
        if (
            weatherText === "Sunny" ||
            weatherText === "Clear" ||
            weatherText === "Fair" ||
            weatherText === "Hazy" ||
            weatherText === "Hot" ||
            weatherText === "Warm" ||
            weatherText === "Mostly Sunny"
        ) {
            document.getElementById('main3').style.color = "yellow";
            document.getElementById('sym').innerHTML = "☀️";
        }
        else if (
            weatherText === "Cloudy" ||
            weatherText === "Partly Cloudy" ||
            weatherText === "Mostly Cloudy" ||
            weatherText === "Overcast"
        ) {
            document.getElementById('main3').style.color = "gray";
            document.getElementById('sym').innerHTML = "☁️";
        }
        else if (
            weatherText === "Rainy" ||
            weatherText === "Showers" ||
            weatherText === "Thunderstorms" ||
            weatherText === "Drizzle" ||
            weatherText === "Scattered Showers" ||
            weatherText === "Light Rain" ||
            weatherText === "Heavy Rain" ||
            weatherText === "Rain Showers" ||
            weatherText === "Isolated Thunderstorms" ||
            weatherText === "Scattered Thunderstorms" ||
            weatherText === "Light Rain Showers" ||
            weatherText === "Heavy Rain Showers" ||
            weatherText === "Rain and Snow" ||
            weatherText === "scattered showers" 
        ) 
        {
            document.getElementById('main3').style.color = "blue";
            document.getElementById('sym').innerHTML = "🌧️";
        }
        else if (
            weatherText === "Snowy" ||
            weatherText === "Blizzard" ||
            weatherText === "Sleet"
        ) {
            document.getElementById('main3').style.color = "white";
            document.getElementById('sym').innerHTML = "❄️";
        } else {
            document.getElementById('main3').style.color = "";
            document.getElementById('sym').innerHTML = "";
        }
    })
    .catch(err => console.error(err));
    });    
    


fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Kolkata&format=json&u=c',options)
    .then(Response=>Response.json())
    .then(Response=>{
        console.log(Response)
        let Forcast=Response.forecasts[0]; 
        document.getElementById('High').innerHTML =Forcast.high;
        document.getElementById('low').innerHTML =Forcast.low;
        document.getElementById('Sky').innerHTML =Forcast.text;
    })
    .catch(err=>console.error(err));