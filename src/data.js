import here from "./here.json";
import weather from "./weather.json";

var data = [];

let location = here.link;
let weatherInfo = weather;
location.forEach((element) => {
  var tempData = {};
  tempData.remainDistance = element.remainDistance;
  (tempData.length = element.length),
    (tempData.country = element.attributes.ROAD_ADMIN_FCN[0].ISO_COUNTRY_CODE),
    (tempData.street = element.attributes.ROAD_GEOM_FCN[0].NAME),
    (tempData.averageSpeeed =
      element.attributes.TRAFFIC_PATTERN_FCN[0].AVG_SPEED);
  console.log("tem data", tempData);

  var geohash = require("ngeohash");
  let filtered = weatherInfo.filter(
    (e) =>
      geohash.encode(e.coord.lat, e.coord.lon) ==
      geohash.encode(element.shape[0], element.shape[1])
  );
  if (filtered.length) {
    console.log("outside filter");
    tempData.clouds = filtered[0].clouds;

    tempData.main = filtered[0].main;
    tempData.temperature = parseFloat(
      filtered[0].main.temp.toString() - 273.15
    ).toFixed(2);
    tempData.feelsLike = parseFloat(
      filtered[0].main.feels_like.toString() - 273.15
    ).toFixed(2);
    tempData.maxTemperature = parseFloat(
      filtered[0].main.temp_max.toString() - 273.15
    ).toFixed(2);
    tempData.minTemperature = parseFloat(
      filtered[0].main.temp_min.toString() - 273.15
    ).toFixed(2);
    tempData.name = filtered[0].name;
    tempData.visibility = filtered[0].visibility;
    tempData.weather = filtered[0].weather;
    tempData.wind = filtered[0].wind;
  }

  data.push(tempData);
});

export default {
  data,
};
