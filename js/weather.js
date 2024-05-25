//get elements
//form
const form = document.querySelector(".form");
const InputSearch = document.querySelector(".search");
// status
const country = document.querySelector(".country");
const weather = document.querySelector(".weather");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const localTime = document.querySelector(".localTime");
const condition = document.querySelector(".condition");
const lastUpdate = document.querySelector(".lastUpdate");
const spinner = document.querySelector(".spinner");
const icon = document.querySelector(".icon");
const h2 = document.querySelector("h2");

// get weather FN
const getWeather = async (selectedCity) => {
  weather.style.display = "none";
  spinner.style.display = "flex";
  h2.style.display = "none";
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=81e8eb1d361c42668ce150619242405&q=${selectedCity}&aqi=no`
    );
    const data = await res.json();
    // set details
    country.innerHTML = `${data.location.country}`;
    city.innerHTML = `${data.location.name}`;
    temp.innerHTML = `${data.current.temp_c}`;
    condition.innerHTML = `${data.current.condition.text}`;
    lastUpdate.innerHTML = `${data.current.last_updated}`;
    localTime.innerHTML = `${data.location.localtime}`;
    icon.setAttribute("src", data.current.condition.icon);
    spinner.style.display = "none";
    weather.style.display = "flex";
  } catch (error) {
    spinner.style.display = "none";
    weather.style.display = "none";
    h2.style.display = "block";
  }
};

//
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (InputSearch.value.trim() === "") {
    alert("enter city name");
  } else {
    getWeather(InputSearch.value.trim());

    InputSearch.value = "";
  }
});
