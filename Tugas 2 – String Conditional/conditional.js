// if-else
var nama = "Junaedi"
var peran = "Penyihir"

if (nama.length == 0){
  console.log("Nama harus diisi!");
}
else {
  if (peran == 0){
  console.log("Halo %s, Pilih peranmu untuk memulai game!", nama)
  }
  else{
    if ( peran.toLowerCase() == "penyihir"){
      console.log("Selamat datang di Dunia Werewolf, %s", nama)
      console.log("Halo %s %s, kamu dapat melihat siapa yang menjadi werewolf!", peran, nama)
    }
    if ( peran.toLowerCase() == "guard"){
      console.log("Selamat datang di Dunia Werewolf, %s", nama)
      console.log("Halo %s %s, kamu akan membantu melindungi temanmu dari serangan werewolf.", peran, nama)
    }
    if ( peran.toLowerCase() == "werewolf"){
      console.log("Selamat datang di Dunia Werewolf, %s", nama)
      console.log("Halo %s %s, Kamu akan memakan mangsa setiap malam!", peran, nama)
    }
  }
}

// switch-case
var tanggal = 15
var bulan = 1
var tahun = 2015

switch (bulan){
  case 1 : {
    console.log(tanggal + " Januari " + tahun)
    break
  }
  case 2 : {
    console.log(tanggal + " Februari " + tahun)
    break
  }
  case 3 : {
    console.log(tanggal + " Maret " + tahun)
    break
  }
  case 4 : {
    console.log(tanggal + " April " + tahun)
    break
  }
  case 5 : {
    console.log(tanggal + " Mei " + tahun)
    break
  }
  case 6 : {
    console.log(tanggal + " Juni " + tahun)
    break
  }
  case 7 : {
    console.log(tanggal + " Juli " + tahun)
    break
  }
  case 8 : {
    console.log(tanggal + " Agustus " + tahun)
    break
  }
  case 9 : {
    console.log(tanggal + " September " + tahun)
    break
  }
  case 10 : {
    console.log(tanggal + " Oktober " + tahun)
    break
  }
  case 11 : {
    console.log(tanggal + " November " + tahun)
    break
  }
  case 12 : {
    console.log(tanggal + " Desember " + tahun)
    break
  }
}

