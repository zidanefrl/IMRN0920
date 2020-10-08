// soal 1
// release 0

class Animal {
    constructor(name){
      this.name = name
    }
    legs = 4
    cold_blooded = false
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// release 1
// Code class Ape dan class Frog di sini
class Ape extends Animal{
  yell(){
    console.log("Auooo")
  }
  legs = 4
}

class Frog extends Animal{
  jump(){
    console.log("hop hop")
  }
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop"

// soal 2
class Clock {
    constructor({template}) {
        this._template = template;
        this._timer;
    }

    render(temp) {
        var date = new Date();
        
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
  
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
  
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = temp
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
        console.log(output);
    }

    stop(){
        clearInterval(this._timer);
    }

    start(){
        this.render(this._template);
        this._timer = setInterval(this.render, 1000, this._template);
    }

}

var clock = new Clock({template: 'h:m:s'});
clock.start();
