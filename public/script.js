async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  result.innerText = "Fetching weather...";

  const response = await fetch(`/weather?city=${city}`);
  const data = await response.json();

  if (data.main) {
    result.innerText = `🌡️ Temp in ${city}: ${data.main.temp}°C`;
  } else {
    result.innerText = "❌ City not found!";
  }
}
