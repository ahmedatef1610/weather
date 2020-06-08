const request = require("request");
/********************************************************************************/
const geocoder = (address, cb) => {
  const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYWhtZWRhdGVmMTYxMCIsImEiOiJja2I0Y3RtN2gwZWloMnlvNnJzN2toOGs4In0.YCt-IJY0RXeXQDe_BwwbYQ&limit=1`;
  request({ url: geocodeURL, json: true }, (error, { body }) => {
    if (error) {
      cb("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      cb("Unable to find location. Try another search.", undefined);
    } else {
      let longitude = body.features[0].center[0];
      let latitude = body.features[0].center[1];
      let location = body.features[0].place_name;
      cb(undefined, { latitude, longitude, location });
    }
  });
};
/********************************************************************************/
module.exports = geocoder;
