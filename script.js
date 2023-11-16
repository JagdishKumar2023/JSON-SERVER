let submitBtn = document.getElementById("submitCity");

submitBtn.addEventListener("click", () => {
  let searchCityInputTag = document.getElementById("searchCity");
  let cityValue = searchCityInputTag.value;

  if (true) {
    console.log(cityValue);
  }

  fetchData(cityValue);

  //   console.log(cityValue);
});

async function fetchData(cityValue) {
  console.log(cityValue);

  let apiUrl = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=dffe01666bd04bc99973520db54724c8&include=minutely&city=${
    cityValue ? cityValue : "indore"
  }&country=india`;
  try {
    let response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`status code ${response.status}`);
    }
    let data = await response.json();

    console.log(data.data);
    displayData(data.data);
  } catch (err) {
    console.log(err);
  }
}

let temperature = document.getElementById("temperature");

function displayData(data) {
  console.log(data);
  temperature.innerText = "";

  let loading = document.createElement("h1");

  data.map((ele, idx, arrr) => {
    let cityName = document.createElement("h1");
    cityName.innerText = ele.city_name;

    let temp = document.createElement("h2");
    temp.innerText = `${ele.temp} C`;

    let aqiName = document.createElement("h1");
    aqiName.innerText = "AQI";

    let aqi = document.createElement("h2");
    aqi.innerText = ele.aqi;

    temperature.append(cityName, temp, aqiName, aqi);
  });
}

fetchData();
