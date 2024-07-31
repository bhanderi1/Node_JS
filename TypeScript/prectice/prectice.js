function sum(a, b) {
    return a + b;
}
console.log(sum(5, "hello"));
var num = function (a, b) {
    return a - b;
};
console.log(num(5, 8));
var str = function (a, b, c) {
    return a + b + c;
};
console.log(str("srushti", " ", "bhanderi"));
// *---------------- Number -------------------------------
var myFavNum = 5;
var myAge = 29;
var Pi = 3.147;
var myNegVal = -5;
var invalidResult = Math.sqrt(16);
console.log(invalidResult); // 4
var nunValue = NaN;
console.log(nunValue); //NaN
// *---------------- String -------------------------------
// string initialization
var message = "hello,Typescript";
// concate string
var myFullName = "srushti bhanderi";
var myFirstName = "srushti";
var myLastName = "bhanderi";
myFullName = myFirstName + myLastName;
console.log(myFullName);
//string Length
var sentence = "hello world";
var sentenceLenght = sentence.length;
console.log(sentenceLenght); //11
//uppercase and Lowercase
var uppercase = "this is typescript";
var struppercase = uppercase.toUpperCase();
console.log(struppercase);
var Lowercase = "THIS IS TYPESCRIPT";
var strLowercase = Lowercase.toLowerCase();
console.log(strLowercase);
// substring
var substr = "hello world";
var substring = substr.substring(2, 7);
console.log(substring); //llo w
// string comparison
var str1 = "Hello";
var str2 = "World!";
var areEqual = str1 === str2;
console.log("Output of str1===str2 is :" + areEqual); // Output of str1===str2 is :true
// string Template
var product = "Laptop";
var price = 250;
console.log("The product ".concat(product, " is priced at ").concat(price, " dollars.")); //The product Laptop is priced at 250 dollars.
// *---------------- Boolean -------------------------------
var isMyNameSrushti = true;
var isDone = true;
var hasStarted = false;
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(5)); // false
function isDivisivleBy4And8(a) {
    return a % 4 === 0 && a % 8 === 0;
}
console.log(isDivisivleBy4And8(32)); // true
// *----------------  Bigint  -------------------------------
// const maxnumber = (Number as any).MAX_SAFE_INTEGER;
// let bignumber: bigint = 9007199254740991n
// console.log(bignumber);
// let anotherBigNumber = BigInt("900719925474099151")
// console.log(anotherBigNumber);
// let sums = bignumber + anotherBigNumber
// console.log(sums);
// let difference = bignumber - anotherBigNumber
// console.log(difference);
// let multiply = bignumber * anotherBigNumber
// console.log(multiply);
// let division = bignumber / anotherBigNumber
// console.log(division);
// *----------------  any & unknown  -------------------------------
var maxnumber = Number.MAX_SAFE_INTEGER;
console.log(maxnumber);
var myfavnum = 5;
myfavnum = "srushti";
// unkown
var num2;
num2 = 5;
num2 = "sru";
num2 = true;
if (typeof num2 === 'number') {
    console.log(num2 + 8); //13
}
else if (typeof num2 === 'boolean') {
    console.log(num2);
}
// API calling-----------
// generice type using simple example 
// async function():Promise<unknown> {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await response.json();
//     return data;
// }
// async function processData() {
//     const response = await fetchData();
//     if(typeof response === "object"){
//    }
// }   given to error
// ====================
// *----------------Type  Inference  -------------------------------
// type not a difend
var myname = 'srushti';
var messages = "Hello, TypeScript!";
console.log(messages);
function calculateArea(len, wid) {
    return len * wid;
}
var result = calculateArea(10, 5);
console.log(result);
// *---------------- function Invocation -------------------------------
// => function Invocation mening function calling
// greeting function
function greet(name, id) {
    console.log("Welcome, ".concat(name, " and your id is ").concat(id));
}
greet("srushti", 1);
// using fat arrow function
var greete = function (name, id) {
    console.log("Welcome, ".concat(name, " and your id is ").concat(id));
};
greete("srushti", 1);
//function return type
var returnval = function (name, id) {
    return "Welcome, ".concat(name, " and your id is ").concat(id);
};
console.log(returnval("srushti", 1));
// palidrome number
var isPalindrome = function (palin) {
    var mypalin = palin.split("").reverse().join("");
    return mypalin === palin;
};
console.log(isPalindrome("12321"));
//
var calculateAverage = function (myarr) {
    var sum = myarr.reduce(function (accumulator, currentVal) { return accumulator + currentVal; });
    return sum / (myarr.length);
};
var average = calculateAverage([6, 8, 11, 10, 15, 12]);
console.log("Average of numbers :", average); //6+8+11+10+15+12 = 52\6 =10.3333333
//  find a max value in array
var arr = [10, 20, 30, 40, 50];
function findMaxValue(array) {
    var maxValue = -Infinity;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        if (item > maxValue) {
            maxValue = item;
        }
    }
    console.log(maxValue); //50
}
findMaxValue(arr);
// *---------------- optional & default parameter -------------------------------
// const depermeter = (name:string , id:number = 1) => {
//    return `Welcome, ${name} and ypur is id ${id}`
// }
// console.log(depermeter("sru"))
// ? =is optional value
var depermeter = function (name, id) {
    if (id) {
        return "Welcome, ".concat(name, " and ypur is id ").concat(id);
    }
    else {
        return "Welcome, ".concat(name);
    }
};
var emp = depermeter("srushti");
var emp1 = depermeter("srushti", 20);
console.log(emp);
console.log(emp1);
// *-------------------------- Array --------------------------------------------
// decalred array in 3 type  :-
// 1.using square brackets
var numbers = [1, 2, 3, 4, 5];
// 2.using the array constructor
var numbers1 = new Array(1, 2, 3, 4, 5, 6);
// 3.using the Array.of method
// const names:string[] = Array.of("name", "age" , "exam")
// console.log(names[1]);
// console.log(names.length);
// *--------------------- Array inbuolt methods ----------------------------------
var fruits = ["apple", "banana", "orange", "mango"];
//push : add data
var newupadatedFruits = fruits.push("Kiwi");
console.log(newupadatedFruits); // 5
console.log(fruits); // [ 'apple', 'banana', 'orange', 'mango', 'Kiwi' ]
// pop
var lastdata = fruits.pop();
console.log(lastdata); //Kiwi
console.log(fruits); //[ 'apple', 'banana', 'orange', 'mango' ]
// for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// for in method => index
// for of method => values
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// for Each method
fruits.forEach(function (curval) { return console.log(curval); });
// *--------------------- Array map & filter method ----------------------------------
var mapnum = [1, 2, 3, 4, 5];
/* map mathod */
// => 1. Doubling each number
var doubleData = mapnum.map(function (curVal) { return curVal * 2; });
console.log(doubleData); // [ 2, 4, 6, 8, 10 ]
// => 2. Coverting numbers to strings
var numToStr = numbers.map(function (curElm) { return curElm.toString(); });
console.log(numToStr); //[ '1', '2', '3', '4', '5' ]
/* Filter mathod */
// => 1. filtering even numbers
var evenNumbers = numbers.filter(function (curElm) { return curElm % 2 === 0; });
console.log(evenNumbers); //[ 2, 4 ]
// => 2. filtering numbers greater than 3
var numberGreterThen = numbers.filter(function (curElm) { return curElm > 3; });
console.log(numberGreterThen); //[ 4, 5 ]0
var person = {
    name: "jasmi",
    age: 18,
    isStudent: true,
    address: {
        city: "Gujarat",
        country: "India"
    }
};
var person1 = {
    name: "jasmi",
    age: 18,
    isStudent: true,
    address: {
        city: "Gujarat",
        country: "India"
    }
};
console.log(person.address.country);
// updating object
person.address.country = "NEPAL";
console.log(person.address.country);
var products = {
    name: "Leptop",
    price: 1000,
    quantity: 5
};
// culculate total price
var culculateTotalPrice = function (products) {
    return "".concat(products.name, " total cost ").concat(products.price * products.quantity);
};
console.log(culculateTotalPrice(products));
// *--------------------------------- call signature method  -------------------------------------
// // given error
// type student ={
//     name:string;
//     age:number;
//     gender ?: string;
//     greet:(country:string) => string  //call signature
// }
// const student1:student ={
//    name:"srushti",
//    age:20,
//    greet:((country):string =>  `Welcome My name is ${student1.name} , I am ${student1.age} yrs old & I am form ${country}`)
// }
// const intoducttion: (student1 : student) => void = (student1:student) : string => {
//       const {name,age} =student1;
//       return `Welcome My name is ${name} , I am ${age} yrs old.`
// }
// console.log(...data: intoducttion(student1))
// console.log(...data:student1.greet("India"));
