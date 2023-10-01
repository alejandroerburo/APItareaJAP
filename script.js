function getWeather() {
    const apiKey = "972f18dacbe0616e93787911d1f2e9ac";
    const city = document.getElementById("cityInput").value;
    const language = "es";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${language}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherInfo.innerHTML = `En ${city}, la temperatura es de ${temperature}°C y ${description}.`;
            } else {
                weatherInfo.innerHTML = `No se encontró información para ${city}.`;
            }
        })
        .catch(error => {
            console.error("Error al obtener el tiempo:", error);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = "Ocurrió un error al obtener la información del tiempo.";
        });
}