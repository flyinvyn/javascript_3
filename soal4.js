console.log("=== Aplikasi untuk menampilkan nama ===")
const axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    response.data.map((item) => {
      console.log(`Nama: ${item.name}`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
