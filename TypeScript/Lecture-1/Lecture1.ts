//tsc Lecture1.ts  =>cmd command
//node Lecture1.js

// number
let a: number = 20;
a = 15;
console.log(a);       //15

let b: object = [];
console.log(typeof b);
console.log(b);         //[]

let c: boolean = true;
console.log(typeof c);     //boolean
console.log(c);            // true

// string 2 type define
// 1.Explicit  type
let firstName: string = "John";
console.log(typeof firstName);  //string
console.log(firstName);         //John

//2. Implicit type
let lastName = "Dylan";
console.log(typeof lastName);   //string
console.log(lastName);          //Dylan


const json = JSON.parse("55");
console.log(typeof json);      // number

// any
let string: any = "any" + 55
console.log(string);           //any55

//never
// let Never:never = true; // Error: Type 'boolean' is not assignable to type 'never'.

let y: undefined = undefined;
console.log(typeof y);                 //undefined

let z: null = null;
console.log(typeof z);             //object

//**------------------------------ array ---------------------------------------**
// array declared two type
var list: number[] = [1, 3, 5]
var lists: Array<number> = [1, 3, 5]


const names: string[] = [];
names.push("Dylan");
names.push("john");
names.push("peter")
console.log(names);   // [ 'Dylan', 'john', 'peter' ]


const readonly: readonly string[] = ["Dylan"];
console.log(readonly);     //[ 'Dylan' ]

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers)  //[ 1, 2, 3, 4 ]

let head: number = numbers[0];
console.log(head);     //1



//**-------------------- Tuples--------------------------**
// ->A tuple is a typed array 

let toup: [string, number];
toup = ["hi", 8];
console.log(toup)


let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);       //[ 5, false, 'Coding God was here' ]


// read only tuples
let Tuple: [number, boolean, string];
Tuple = [5, false, 'Coding God was here'];
Tuple.push('Something new and wrong');
console.log(Tuple);      // [ 5, false, 'Coding God was here', 'Something new and wrong' ]

const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);            // [ 55.2, 41.3 ]



// **-------------------------function--------------------------------
function printHello(): void {
    console.log('Hello!');
}
printHello();  //Hello!


function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply(2, 8))   //16

let multi = (a: number, b: number) => { return a * b }
console.log(multi(10, 10));//100

// Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));  // 5

//Optional Parameters ===  c ?: number   => this mening condition c valueis enter and not a enter
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
console.log(add(5, 5));  //10

// defalut perameter 
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
console.log(pow(2));   //1024 = 2*2*2*2*2*2*2*2*2*2


// Rest Parameters
function num(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(num(10, 10, 10, 10, 10));   //50

// Type Alias   :- return negaative value
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(50));   //-50


function getTime(): number {
    return new Date().getDate();
}
console.log(getTime())  //23

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);  // My status code is 404   -> number
printStatusCode('404');  // My status code is 404  -> string
// **----------------------------object ----------------------------------

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);  //{ type: 'Toyota', model: 'Corolla', year: 2009 }


const cars: { type: string, mileage?: number } = {
    type: "Toyota"
    //  mileage = 2000;
}
console.log(cars);  //{ type: 'Toyota' }  
//,ileage is optinal value

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = 96;
console.log(typeof nameAgeMap);   //object
console.log(nameAgeMap);  //{ Jack: 25, Mark: 96 }



//**-----------------------------  Enums  -----------------------------**

enum color {
    red, green, blue, black
};
let result = color.blue;
console.log(result);  //2


enum CardinalDirections {
    North,
    East,
    South,
    West
};
let currentDirection = CardinalDirections.North;
console.log(currentDirection);  //0


enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};
console.log(StatusCodes.NotFound);  //404
console.log(StatusCodes.Success);   //200



//**---------------------------- class ------------------------**

// class Person {
//     name: string;
//   }      
//   const person = new Person();
//   person.name = "Jane";
//   console.log(person);  //Person{name : 'Jane'}



class Person {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
const person = new Person("Jane");
console.log(person.getName());  //Jane



/**------------------------- interface ------------------------- */
interface Rectangle {
    height: number,
    width: number
};
const rectangle: Rectangle = {
    height: 20,
    width: 10
};
const rect: Rectangle = {
    height: 50,
    width: 40
}
console.log(rectangle);//{ height: 20, width: 10 }
console.log(rect);//{ height: 50, width: 40 }



interface Rectangle {
    height: number,
    width: number
}
interface ColoredRectangle extends Rectangle {
    color: string
}
const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);  //{ height: 20, width: 10, color: 'red' }

// *--------------------casting -----------------------*
let x: string = 'hellow';
console.log((x as string).length);   //6

let xa: unknown = 'hello';
console.log((<string>xa).length);  //5

let xaa = 1253;
console.log(((xaa as unknown) as number));

//*------------generic ------------------------------ */

function indentity<T>(arg: T): T {
    return arg;
}
let output = indentity<string>("mystring");
let output1 = indentity<number>(100);
console.log(output);
console.log(output1);


// *-------------------- untility type -----------------------*
// Partial
interface Point {
    x: number;
    y: number;
}
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
pointPart.y = 10;
console.log(pointPart);  //{ x: 10, y: 10 }

// Required
interface Car {
    make: string;
    model: string;
    mileage?: number;
}
let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);

// --------------------------
let value: string | undefined | null = null;
console.log(typeof value);  //object

value = 'hello';
console.log(typeof value); //undefine

value = undefined;
console.log(typeof value); // null