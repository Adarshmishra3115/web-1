//code
const input = document.getElementById("city-input") ;
const button = document.getElementById("click-button");

const cityvalue = document.getElementById("city-name");
const temp = document.getElementById("temp");
const time = document.getElementById("time");
const humid = document.getElementById("humid");
const co2 = document.getElementById("co2");
const so2 = document.getElementById("so2");
   async function getData(cityName) {
        const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=134ce2764aaa4de192094605251508&q=${cityName}&aqi=yes`);

        return await promise.json();
    };

button.addEventListener("click", async () => {
    alert("city is correct");
    const city = input.value;
    const result = await getData(city);
    
    cityvalue.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;

    temp.innerText = `Temperature in degree celcius is = ${result.current.temp_c}`;
    time.innerText = `Time is = ${result.location.localtime}`;
    humid.innerText = `Humidity is = ${result.current.humidity}`;
    so2.innerText = `SO2 content is = ${result.current.air_quality.so2}`
    co2.innerText = `CO2 content is = ${result.current.air_quality.co}`
});
