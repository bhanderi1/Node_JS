function sum(a: number, b: string) {
    return a + b;
}
console.log(sum(5, "hello"))

const num = (a: number, b: number): number => {
    return a - b;
}
console.log(num(5, 8))

const str = (a: string, b: string, c: string): string => {
    return a + b + c;
}
console.log(str("srushti", " ", "bhanderi"))


// *---------------- Number -------------------------------
let myFavNum: number = 5;
let myAge: number = 29;
let Pi: number = 3.147;
let myNegVal: number = -5

let invalidResult: number = Math.sqrt(16);
console.log(invalidResult);  // 4

let nunValue: number = NaN;
console.log(nunValue);  //NaN


// *---------------- String -------------------------------
// string initialization
let message: string = "hello,Typescript"

// concate string
let myFullName = "srushti bhanderi"
let myFirstName = "srushti"
let myLastName = "bhanderi"
myFullName = myFirstName + myLastName
console.log(myFullName);

//string Length
let sentence: string = "hello world"
let sentenceLenght: number = sentence.length
console.log(sentenceLenght); //11

//uppercase and Lowercase
let uppercase: string = "this is typescript"
let struppercase: string = uppercase.toUpperCase()
console.log(struppercase);

let Lowercase: string = "THIS IS TYPESCRIPT"
let strLowercase: string = Lowercase.toLowerCase()
console.log(strLowercase);

// substring
let substr: string = "hello world"
let substring = substr.substring(2, 7)
console.log(substring); //llo w

// string comparison
let str1: string = "Hello";
let str2: string = "World!";
let areEqual: boolean = str1 === str2;
console.log("Output of str1===str2 is :" + areEqual);  // Output of str1===str2 is :true

// string Template
let product: string = "Laptop";
let price: number = 250;
console.log(`The product ${product} is priced at ${price} dollars.`);//The product Laptop is priced at 250 dollars.


// *---------------- Boolean -------------------------------
let isMyNameSrushti: boolean = true
let isDone: boolean = true
let hasStarted: boolean = false

function isEven(a: number): boolean {
    return a % 2 === 0
}
console.log(isEven(5)); // false

function isDivisivleBy4And8(a: number): boolean {
    return a % 4 === 0 && a % 8 === 0
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
const maxnumber = (Number as any).MAX_SAFE_INTEGER;
console.log(maxnumber);

let myfavnum: any = 5;
myfavnum = "srushti"

// unkown
let num2: unknown;
num2 = 5;
num2 = "sru";
num2 = true;

if (typeof num2 === 'number') {
    console.log(num2 + 8);  //13
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
const myname = 'srushti'

let messages = "Hello, TypeScript!";
console.log(messages);

function calculateArea(len: number, wid: number) {
    return len * wid;
}
const result = calculateArea(10, 5);
console.log(result);


// *---------------- function Invocation -------------------------------
// => function Invocation mening function calling

// greeting function
function greet(name: string, id: number) {
    console.log(`Welcome, ${name} and your id is ${id}`);
}
greet("srushti", 1)

// using fat arrow function
const greete = (name: string, id: number) => {
    console.log(`Welcome, ${name} and your id is ${id}`);
}
greete("srushti", 1)

//function return type
const returnval = (name: string, id: number): string => {
    return `Welcome, ${name} and your id is ${id}`;
}
console.log(returnval("srushti", 1))

// palidrome number
const isPalindrome = (palin: string): boolean => {
    let mypalin = palin.split("").reverse().join("");
    return mypalin === palin;
}
console.log(isPalindrome("12321"))

//
const calculateAverage = (myarr: number[]) => {
    const sum = myarr.reduce((accumulator: number, currentVal: number) => accumulator + currentVal);
    return sum / (myarr.length)
}
const average = calculateAverage([6, 8, 11, 10, 15, 12]);
console.log("Average of numbers :", average);                  //6+8+11+10+15+12 = 52\6 =10.3333333

//  find a max value in array
let arr = [10, 20, 30, 40, 50];
function findMaxValue(array: number[]) {
    let maxValue: number = -Infinity;
    for (let item of array) {
        if (item > maxValue) {
            maxValue = item;
        }
    }
    console.log(maxValue);   //50
}
findMaxValue(arr)

// *---------------- optional & default parameter -------------------------------
// const depermeter = (name:string , id:number = 1) => {
//    return `Welcome, ${name} and ypur is id ${id}`
// }
// console.log(depermeter("sru"))

// ? =is optional value
const depermeter = (name: string, id?: number) => {
    if (id) {
        return `Welcome, ${name} and ypur is id ${id}`
    }
    else {
        return `Welcome, ${name}`
    }
}
const emp = depermeter("srushti")
const emp1 = depermeter("srushti", 20)
console.log(emp);
console.log(emp1);


// *-------------------------- Array --------------------------------------------
// decalred array in 3 type  :-
// 1.using square brackets
const numbers: number[] = [1, 2, 3, 4, 5]

// 2.using the array constructor
const numbers1: number[] = new Array(1, 2, 3, 4, 5, 6)

// 3.using the Array.of method
// const names:string[] = Array.of("name", "age" , "exam")
// console.log(names[1]);
// console.log(names.length);


// *--------------------- Array inbuolt methods ----------------------------------

const fruits: string[] = ["apple", "banana", "orange", "mango"]
//push : add data
const newupadatedFruits = fruits.push("Kiwi")
console.log(newupadatedFruits); // 5
console.log(fruits);  // [ 'apple', 'banana', 'orange', 'mango', 'Kiwi' ]

// pop
const lastdata = fruits.pop()
console.log(lastdata)//Kiwi
console.log(fruits); //[ 'apple', 'banana', 'orange', 'mango' ]

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for in method => index
// for of method => values
for (const fruit of fruits) {
    console.log(fruit);
}

// for Each method
fruits.forEach((curval: string) => console.log(curval)
)

// *--------------------- Array map & filter method ----------------------------------

const mapnum: number[] = [1, 2, 3, 4, 5]

/* map mathod */
// => 1. Doubling each number
const doubleData: number[] = mapnum.map((curVal: number) => curVal * 2)
console.log(doubleData);  // [ 2, 4, 6, 8, 10 ]

// => 2. Coverting numbers to strings
const numToStr: string[] = numbers.map((curElm: number) => curElm.toString())
console.log(numToStr);   //[ '1', '2', '3', '4', '5' ]


/* Filter mathod */
// => 1. filtering even numbers
const evenNumbers = numbers.filter((curElm: number) => curElm % 2 === 0)
console.log(evenNumbers); //[ 2, 4 ]

// => 2. filtering numbers greater than 3
const numberGreterThen = numbers.filter((curElm: number) => curElm > 3)
console.log(numberGreterThen); //[ 4, 5 ]0



// *---------------------------------  object  -------------------------------------
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    class ?:string;  
    address: { city: string; country: string };
}
const person:Person = {
    name: "jasmi",
    age: 18,
    isStudent: true,
    address: {
        city: "Gujarat",
        country: "India"
    }
}
const person1:Person = {
    name: "jasmi",
    age: 18,
    isStudent: true,
    address: {
        city: "Gujarat",
        country: "India"
    }
}
console.log(person.address.country);
// updating object
person.address.country = "NEPAL"
console.log(person.address.country);


// product object
type Products  ={
    name:string,
    price:number,
    quantity:number
}
const products:Products  = {
    name: "Leptop",
    price: 1000,
    quantity: 5
}

// culculate total price
const culculateTotalPrice = (products:Products) => {
return `${products.name} total cost ${products.price * products.quantity}`
}
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
