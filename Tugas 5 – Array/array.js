// soal 1 range
function range(startNum, finishNum){
  if (startNum == null || finishNum == null){
    allofNum = [-1]
  }
  else {
    if (startNum < finishNum){
    allofNum = [startNum]
    
    for (i = startNum+1; i <= finishNum; i++){
      allofNum.push(i)
      }
    }
    else if (finishNum < startNum){
      allofNum = [finishNum]

      for (i = finishNum+1; i <= startNum; i++){
        allofNum.push(i)
      }
    }
    else{
      allofNum = [startNum]
    }
  }
  return allofNum
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

// soal 2 range with step
function rangeWithStep(startNum, finishNum, step){
  var allofNum = []
  var i = startNum

  if (startNum < finishNum){    
    while (i <= finishNum){
      allofNum.push(i)
      i += step
      }
  }
  else if (finishNum < startNum){
    while (i >= finishNum){
      allofNum.push(i)
      i -= step
    }
  }
  else{
    allofNum = [null]
  }
  return allofNum
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

// soal 3 sum of range
function sum(startNum, finishNum, step = 1) {
    if (startNum == null && finishNum == null) {
        return 0;
    }
    else if (finishNum == null) {
        return startNum;
    }
    else {
        var nilai = 0;
        if(startNum<finishNum){
            for (i = startNum; i<=finishNum; i+=step) {
                nilai += i;
            }
            return nilai;
        }
        else {
            for (i = startNum; i>=finishNum; i-=step) {
                nilai += i;
            }
            return nilai;
        }
    }
}
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 


// soal 4 array multidimensi
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 

function dataHandling(n){
  for (i = 0; i < n; i++){
    console.log("Nomor ID : "+input[i][0])
    console.log("Nama Lengkap : "+input[i][1])
    console.log("TTL : "+input[i][2]+" "+input[i][3])
    console.log("Hobi : "+input[i][4])
    console.log()
  }
}

dataHandling(4)

// soal 5 balik kata
function balikKata(string){
  var i = 0
  var hasil = []
  var n = string.length - 1

  while (i <= n){
    hasil.push(string[n])
    n -= 1
  }
  return hasil
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

//soal 6 method array
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
  input.splice(1, 2)
  input.splice(4, 1)
  input.splice(1, 0, "Roman Alamsyah Elsharawy")
  input.splice(2, 0, "Provinsi Bandar Lampung",)
  input.splice(4, 1)
  input.splice(4, 0, "Pria", "SMA Internasional Metro")
  
  console.log(input)

  date = input[3].split("/")
  waktu = input[3].split("/")
  bulan = parseInt(date[1])
  switch (bulan){
    case 1 : {
      console.log("Januari")
      break
    }
    case 02 : {
      console.log("Februari")
      break
    }
    case 03 : {
      console.log("Maret")
      break
    }
    case 04 : {
      console.log("April")
      break
    }
    case 5 : {
      console.log("Mei")
      break
    }
    case 6 : {
      console.log("Juni")
      break
    }
    case 7 : {
      console.log("Juli")
      break
    }
    case 8 : {
      console.log("Agustus")
      break
    }
    case 9 : {
      console.log("September")
      break
    }
    case 10 : {
      console.log("Oktober")
      break
    }
    case 11 : {
      console.log("November")
      break
    }
    case 12 : {
      console.log("Desember")
      break
    }
  }

  sorting = date.sort(function (value1, value2) { return value2 - value1 } )

  console.log(sorting)

  tgl = waktu.join("-")
  
  console.log(tgl)
  
  nama = input[1].slice(0, 14)

  console.log(nama)
}

dataHandling2(input)