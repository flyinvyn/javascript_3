const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else reject("Hari ini bukan hari kerja");
    }, 3000);
  });
};

cekHariKerja("sabtu")
  .then((result) => {
    console.log(`${result} hari kerja`);
  })
  .catch((err) => {
    console.log(err);
  });

const check = async () => {
  try {
    const result = await cekHariKerja("senin");
    console.log(`${result} hari kerja`);
  } catch (error) {
    console.log(error);
  }
};
check();
