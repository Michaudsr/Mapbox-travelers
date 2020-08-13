require('dotenv').config();
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
// console.log(MAPBOX_ACCESS_TOKEN);
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: MAPBOX_ACCESS_TOKEN });


geocodingClient
.forwardGeocode({
    query: "Atlanta, Ga"
})
.send()
.then(response =>{
    const match = response.body
    

    const features = match.features;
    console.log(features)

   
})

// geocodingClient
// .forwardGeocode({
//     query: 'Atlanta, Ga'
// })
// .send()
// .then(response => {
//     const match = response.body;
//     let firstFeaturedCoord = match.features[0].center
//     console.log(firstFeaturedCoord)
// })

