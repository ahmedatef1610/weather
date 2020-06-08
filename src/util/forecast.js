const request = require("request");
/********************************************************************************/
const forecast = (lat,lon, cb) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&mode=json&units=metric&appid=c6c975cbb872d053a3107b67d960c19c`;
    request({ url, json: true }, (error, {body}) => {
      if (error) {
        cb("unable to connect to weather service!",undefined);
      } else if (body.message) {
        cb("Unable to find location",undefined);
      } else {
        cb(undefined,
          body.weather[0].main +
            ". It is currently " +
            body.main.temp +
            " degrees out. There is a " +
            body.main.humidity +
            "% humidity."
        );
        // console.log(response.body);
      }
    });
};
/********************************************************************************/
module.exports = forecast;
