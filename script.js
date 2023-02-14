const searchBtnEl = $("#searchBtn");
const APIkey = "001b066b5029b506b7cbdc3c408d8a64";


function fetchCity(city) {
  let displayedForcast = [];
  let cityInput = $("#searchInput").value;
  if (cityInput === "") return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${APIkey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            if (data.status === 404) return;
            makeNewHistoryButton(data.city.name);
            for (let i = 0; i < data.list.length; i++) {
                let newForcast = {
                 city: data.city.name,
                 date: moment.unix(data.list[i].dt).format("M/D/YYYY"),
                 hour: moment.unix(data.list[i].dt).format("H"),
                 temp: data.list[i].main.temp,
                 wind: data.list[i].wind.speed,
                 humidity: data.list[i].main.humidity,
                 icon: data.list[i].weather[0].icon,
                 iconDescription: data.list[i].weather[0].description,
                };
            displayedForcast.push(newForcast);
      }
    })
    
    console.log("It worked!");
    
}


function displayTime() {
        var rightNow = moment().format("MMMM Do, YYYY h:mm:ss A");
        $("#dateTime").text(rightNow);
    };
    
setInterval(displayTime, 1000);


document.getElementById("searchBtn").addEventListener("click", fetchCity);