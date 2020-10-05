// soal no 1
function arrayToObject(arr) {
  var now = new Date()
  var thisYear = now.getFullYear()
  
  for (i = 0; i <= arr.length - 1; i++){
    console.log(i+1, arr[i][0]+" "+ arr[i][1]+" : {")
    console.log("\tfirstName : "+arr[i][0])
    console.log("\tlastName : "+arr[i][1])
    console.log("\tgender : "+arr[i][2])
    if (arr[i][3] == null || arr[i][3] > thisYear){
      console.log("\tage : "+"Invalid Birth Year") 
    }
    else{
      console.log("\tage : "+(thisYear - arr[i][3]))
    }
    console.log("}")
  }
}
 
// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2)

// soal no 2
function shoppingTime(memberId, money) {
  var stuff = [
    { name: 'Sepatu Stacattu', price: '1500000'},
    { name: 'Baju Zoro', price: '500000'},
    { name: 'Baju H&N', price: '250000'},
    { name: 'Sweater Uniklooh', price: '175000'},
    { name: 'Casing Handphone', price: '50000'},
    ]

  if ( !memberId){
    console.log("Mohon maaf, toko X hanya berlaku untuk member saja")
  }
  else if (money < 50000){
    console.log("Mohon maaf, uang tidak cukup")
  }
  else{
    console.log("{ memberId: "+memberId+",")
    console.log("money: "+money+",")
    console.log("listPurchased:")
    process.stdout.write("[ ")
    
    for (i = 0; i <= stuff.length - 1; i++){
      if ( money >= stuff[i]["price"]){
        money -= stuff[i]["price"]
        console.log("\t"+stuff[i]["name"])
      }
    } 
    process.stdout.write("]\n\n")
    }
}
 
// TEST CASES
shoppingTime('1820RzKrnWn08', 2475000)
shoppingTime('82Ku8Ma742', 170000)
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

// soal no 3
function naikAngkot(listPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    hasil = [];
    
    for(i=0; i<listPenumpang.length; i++) {
        var start = false;
        var pass = 0;
        for(j=0;j<rute.length;j++) {
            if(start == false) {
                if(rute[j] == listPenumpang[i][1]) {
                    start = true;
                    pass++;
                }
            }
            else if(start == true && rute[j] != listPenumpang[i][2]) {
                pass++;
            }
            else if(rute[j] == listPenumpang[i][2]) {
                break;
            }
        }
        var jumlah = 2000 * pass;

        var object = {penumpang: listPenumpang[i][0],
            naikDari: listPenumpang[i][1],
            tujuan: listPenumpang[i][2],
            bayar: jumlah
        };

        hasil.push(object);

    }
    return hasil;
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
 
console.log(naikAngkot([]));
