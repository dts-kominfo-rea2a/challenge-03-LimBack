// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan)=>{
  const arrdataBelanja=[];
  for (let arrIndex=0; arrIndex< dataBelanjaan.length; arrIndex++)
    {
      const arrBarang= dataBelanjaan[arrIndex];
      arrdataBelanja.push("- " + arrBarang.nama + " x " + arrBarang.kuantitas);
    }
  return arrdataBelanja;
};
 
// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaan)=>{
  let totalHarga = 0;
  let indexHarga = 0;
  while (indexHarga < dataBelanjaan.length){
    let objekHarga = dataBelanjaan[indexHarga];
    totalHarga += (objekHarga.harga * objekHarga.kuantitas);
    indexHarga++
  };
  return totalHarga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
