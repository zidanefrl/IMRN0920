// while
console.log("LOOPING PERTAMA")
var i = 2
while (i <= 20 && i % 2 == 0){
  console.log(i, "- I love coding")
  i += 2
}

console.log("LOOPING KEDUA")
var j = 20
while (j >= 2 && j % 2 == 0){
  console.log(j, "- I will become a mobile developer")
  j -= 2
}

// for
for (i = 1; i < 21; i++){
  if (i % 2 == 1){
    if (i == 3 || i == 9 || i == 15){
    console.log(i, "- I Love Coding")
    }
    else{
      console.log(i, "- Santai")
    } 
  }
  else {
    console.log(i, "- Berkualitas")
  }
  
  
}

// Membuat persegi panjang
for (i = 0; i < 4 ; i++){
  for (j = 0; j < 8; j++){
    process.stdout.write("#")
  }
  process.stdout.write("\n")
}

// Membuat tangga
for (i = 0; i < 7 ; i++){
  for (j = 0; j <= i; j++){
    process.stdout.write("#")
  }
  process.stdout.write("\n")
}

// Membuat papan catur
for (i = 0; i < 8 ; i++){
  for (j = 0; j < 4; j++){
    if ( i % 2 == 0){
      process.stdout.write(" #")
    }
    else{
      process.stdout.write("# ")
    }
  }
  process.stdout.write("\n")
}


