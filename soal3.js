// console.log(
//   "=== Aplikasi untuk menampilkan Image URL beserta keterangannya ==="
// );
// const axios = require("axios");
// axios
//   .get("https://api.punkapi.com/v2/beers")
//   .then(function (response) {
//     response.data.map((item) => {
//       console.log(`Image URL: ${item.image_url}
// Keterangan: ${item.name}
// ==========`);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

console.log(
  "=== Aplikasi untuk menampilkan title dari topik 'US health insurance data' ==="
);
const axios = require("axios");
axios
  .get("https://www.healthcare.gov/api/index.json")
  .then(function (response) {
    response.data.map((item) => {
      console.log(`Title: ${item.title}`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
