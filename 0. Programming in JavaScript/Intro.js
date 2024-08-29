let a = 10;
console.log(a);

let b = [1,2,3,4,5];
console.log(b);

console.log("Hey there Michael!");

// JS
// Variables, Arrays, Functions, Loops, Classes, Objects

c = 20; // Global Variable
var d = 30; // Function Scope
let e = 50; // Block Scope

let arr = ["apple", "mango", "maputi"]
console.log(arr);

for (let i=0; i<5; i++){
    console.log(arr[i]);
}

arr.push("Banana"); // insert at back
arr.pop(); // remove from back
arr.shift(); // remove from front
arr.unshift("Orange"); // insert at front
arr.indexof("Orange"); // finds you the index

if (arr[0]=="Apple"){
    console.log("Apple");
}
else{
    console.log("No, it is", arr[0]);
}

// Function Declarition - Where we use key words, or give a name to the function
function fun(){
    let a = 5;
    if(a===5){
        let b = 10;
        console.log("Inside",b);
    }
    console.log("Outside",b);
}

function square_root(n){
    console.log("In first Sqrt Fn");
    //console.log(Math.sqrt(n));
    return;
}

// Function Hoisting
// Function Expression
var sqrt_n = function(){
    console.log("In second Sqrt Fn");
    return;
}

square_root(10);
sqrt_n(10);