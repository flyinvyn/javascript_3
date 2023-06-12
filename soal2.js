const getMonth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      let month = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      if (!error) {
        resolve(month);
      } else {
        reject("Sorry, data not found");
      }
    }, 4000);
  });
};

getMonth()
  .then((res) => {
    res.map((month) => {
      console.log(`Bulan: ${month}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
