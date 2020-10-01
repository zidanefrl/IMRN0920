// no1
function teriak(){
  console.log("Halo Sanbers!")
}

console.log(teriak())

// no2
function kalikan(num1, num2){
  hasil = num1 * num2
  return hasil
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)

console.log(hasilKali)

// no3
function introduce(name, age, address, hobby){
  console.log("Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!")
}
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)
