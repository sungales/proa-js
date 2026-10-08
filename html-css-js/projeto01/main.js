const apiKey = "4a31e02033fecdb25cf30bb1bf10dd11";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
// const apiUrl = "";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

async function checkWeather(city) {
  if (!city) {
    error.querySelector("p").textContent = "Nome da cidade";

    error.style.display = "block";
    weather.style.display = "none";

    return;
  }

  try {
    const response = await fetch(
      apiUrl + encodeURIComponent(city) + `&appid=${apiKey}`,
    );

    if (!response.ok) {
      if (response.status === 404) {
        error.querySelector("p").textContent = "cidade não encontrada";
      } else if (response.status === 401) {
        error.querySelector("p").textContent =
          "chave da api não tá funcionando";
      } else {
        error.querySelector("p").textContent =
          "não foi possível consultar o clima";
      }

      error.style.display = "block";
      weather.style.display = "none";

      return;
    }

    const data = await response.json();

    cityElement.textContent = data.name;

    tempElement.textContent = `${Math.round(data.main.temp)}°C`;

    humidityElement.textContent = `${data.main.humidity}%`;

    const windSpeed = data.wind.speed * 3.6;

    windElement.textContent = `${windSpeed} km/h`;

    const weatherType = data.weather[0].main;

    if (weatherType === "Clouds") {
      weatherIcon.src = "../images/clouds.png";
    } else if (weatherType === "Clear") {
      weatherIcon.src = "../images/clear.png";
    } else if (weatherType === "Rain") {
      weatherIcon.src = "../images/rain.png";
    } else if (weatherType === "Drizzle") {
      weatherIcon.src = "../images/drizzle.png";
    } else if (
      weatherType === "Mist" ||
      weatherType === "Smoke" ||
      weatherType === "Haze" ||
      weatherType === "Dust" ||
      weatherType === "Fog"
    ) {
      weatherIcon.src = "./images/mist.png";
    } else {
      weatherIcon.src = "./images/clouds.png";
    }

    weather.style.display = "block";
    error.style.display = "none";
  } catch (err) {
    console.error("erro ao buscar o clima: ", err);

    error.querySelector("p").textContent =
      "nao deu pra conectar com o serviço de clima.";

    error.style.display = "block";
    weather.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});
