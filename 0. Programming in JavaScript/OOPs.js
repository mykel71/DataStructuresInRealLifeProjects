// Object Orriented Programming in JS

// allows to create objects without defining the class

// One of many way creating JavaScript - (JSON) - Object Notation


// Another way
/*
function Fruit(taste,color){
    this.color = color;
    this.taste = taste;
}
*/

// new keyword
let mango = new Fruit("sweet", "yellow");
let orange = new Fruit("sour", "orange");

// One Way
var apple = {
    taste: "sweet",
    color: "red",
} 
// Class Keyword (ECMAScript 2015)

class Fruit{
    constructor(taste,color){
        this.color = color;
        this.taste = taste;
    }
};



// Class Expression
let FruitClass2 = class{
    constructor(taste,color){
        this.color = color;
        this.taste = taste;
    }
};


// Functions - Declaration, Function Expression
// Functions - Declaration, Function Expression

let kiwi = new Fruit("sour","green");
let kiwi2 = new Fruit("sour","green");


var bird = {
    x:100,
    y:20,
    color:"blue",
    eggs:["one", "two", "three"],

    fly:function(){
        console.log("Bird is Flying",this.x, this.y);
    },
    addEgg:function(eggName){
        this.eggs.push(eggName);
    }
};


/*
// For Loop
for (let i = 0; i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}

// For Each Loop
bird.eggs.forEach(function(val,idx){
    console.log(val,idx);
});
*/

var canvas = document.getElementById('mycanvas')
console.log(canvas)