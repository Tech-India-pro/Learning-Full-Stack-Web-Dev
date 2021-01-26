console.log("JavaScript");

function printIsAGoodBoy(name, greetingText = "Something" /* greetingText has default value */){
    console.log(greetingText + " " + name);
    console.log(name + " is a good boy");
}

let name1 = "Amber";
let name2 = "Adhyot";
let name3 = "Aditya";
let name4 = "Maanit";
let name5 = "Ujjwal";
const greetingText = "Good Morning";

printIsAGoodBoy(name1, greetingText);
printIsAGoodBoy(name2, greetingText);
printIsAGoodBoy(name3, greetingText);
printIsAGoodBoy(name4, greetingText);
printIsAGoodBoy(name5); // greetingText missing!

//Returning value

function sum(a, b, c){
    // Does not print anything
    // Only returns the sum
    let sum = a + b + c;
    return sum;
    //function ends after return!!!
}
let sumOfNumbers = sum(2, 3, 4); // Returns value of sum = "9"
console.log(sumOfNumbers);  //$~9


// Function to find the maximum of two numbers
function max(a, b){
    if (a > b){
        console.log("Max = " + a);
    }
    else if (a < b){
        console.log("Max = " + b);
    }
    else{
        console.log("Both are equal");
    }
}

function min (a, b){
    if (a < b){
        console.log("Min = " + a);
    }
    else if (a > b){
        console.log("Min = " + b);
    }
    else{
        console.log("Both are equal");
    }
}

function pow(a, b){
    let pow = a**b;
    console.log(pow);
}

function sqrt(a){
    console.log(a**(0.5));
}

max(20, 14); //$~Max = 20
min(20, 14); //$~Min = 14
pow(2, 3); //$~8
sqrt(400); //$~20