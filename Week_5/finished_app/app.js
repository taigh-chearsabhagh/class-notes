window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');

  let temperatureDegree = document.querySelector('.temperature-degree');

  let locationTimezone = document.querySelector('.location-timezone');

  let temperatureSection = document.querySelector('.temperature')

  const temperatureSpan = document.querySelector('.temperature span');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'http://cors-anywhere.herokuapp.com/'

      // url removed since you don't want to share that online 
      const api = `${proxy}<<URL>>/${lat},${long}`

      fetch(api)
        .then(response =>{
          return response.json();
        })
        .then(data => {
          // console.log(data);
          const {temperature, summary, icon} = data.currently;
          // set DOM elements from the api
          // console.log(temperature);
          // console.log(temperatureDegree);
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;

          // formula for celcius
          let celsius = (temperature - 32) * (5 /9);

          // set icons
          setIcons(icon, document.querySelector('.icon'));

          //  change temp to celcius/farenheit
          temperatureSection.addEventListener('click', () =>{
            if(temperatureSpan.textContent === "F"){
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(celsius);
            }else{
              temperatureSpan.textContent = "F"
              temperatureDegree.textContent = temperature;
            }
          })
        })

    });
  }
function setIcons(icon, iconID){
  const skycons = new Skycons({color: 'white'});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons[currentIcon]);
}
})
