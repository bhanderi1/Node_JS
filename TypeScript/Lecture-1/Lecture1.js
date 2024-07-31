//tsc Lecture1.ts  =>cmd command
//node Lecture1.js
//@ts-ignore
// number
var a = 20;
a = 15;
console.log(a); //15
var b = [];
console.log(typeof b);
console.log(b); //[]
var c = true;
console.log(typeof c); //boolean
console.log(c); // true
// string 2 type define
// 1.Explicit  type
var firstName = "John";
console.log(typeof firstName); //string
console.log(firstName); //John
//2. Implicit type
var lastName = "Dylan";
console.log(typeof lastName); //string
console.log(lastName); //Dylan
var json = JSON.parse("55");
console.log(typeof json); // number
// any
var string = "any" + 55;
console.log(string); //any55
//never
// let Never:never = true; // Error: Type 'boolean' is not assignable to type 'never'.
var y = undefined;
console.log(typeof y); //undefined
var z = null;
console.log(typeof z); //object
//**------------------------------ array ---------------------------------------**
// array declared two type
var list = [1, 3, 5];
var lists = [1, 3, 5];
var names = [];
names.push("Dylan");
names.push("john");
names.push("peter");
console.log(names); // [ 'Dylan', 'john', 'peter' ]
var readonly = ["Dylan"];
console.log(readonly); //[ 'Dylan' ]
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); //[ 1, 2, 3, 4 ]
var head = numbers[0];
console.log(head); //1
//**-------------------- Tuples--------------------------**
// ->A tuple is a typed array 
var toup;
toup = ["hi", 8];
console.log(toup);
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple); //[ 5, false, 'Coding God was here' ]
// read only tuples
var Tuple;
Tuple = [5, false, 'Coding God was here'];
Tuple.push('Something new and wrong');
console.log(Tuple); // [ 5, false, 'Coding God was here', 'Something new and wrong' ]
var graph = [55.2, 41.3];
console.log(graph); // [ 55.2, 41.3 ]
// **-------------------------function--------------------------------
function printHello() {
    console.log('Hello!');
}
printHello(); //Hello!
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 8)); //16
var multi = function (a, b) { return a * b; };
console.log(multi(10, 10)); //100
// Named Parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 })); // 5
//Optional Parameters ===  c ?: number   => this mening condition c valueis enter and not a enter
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(5, 5)); //10
// defalut perameter 
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2)); //1024 = 2*2*2*2*2*2*2*2*2*2
// Rest Parameters
function num(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(num(10, 10, 10, 10, 10)); //50
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(50)); //-50
function getTime() {
    return new Date().getDate();
}
console.log(getTime()); //23
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404); // My status code is 404   -> number
printStatusCode('404'); // My status code is 404  -> string
// **----------------------------object ----------------------------------
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car); //{ type: 'Toyota', model: 'Corolla', year: 2009 }
var cars = {
    type: "Toyota"
    //  mileage = 2000;
};
console.log(cars); //{ type: 'Toyota' }  
//,ileage is optinal value
var nameAgeMap = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = 96;
console.log(typeof nameAgeMap); //object
console.log(nameAgeMap); //{ Jack: 25, Mark: 96 }
//**-----------------------------  Enums  -----------------------------**
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
    color[color["black"] = 3] = "black";
})(color || (color = {}));
;
var result = color.blue;
console.log(result); //2
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
var currentDirection = CardinalDirections.North;
console.log(currentDirection); //0
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
console.log(StatusCodes.NotFound); //404
console.log(StatusCodes.Success); //200
//**---------------------------- class ------------------------**
// class Person {
//     name: string;
//   }      
//   const person = new Person();
//   person.name = "Jane";
//   console.log(person);  //Person{name : 'Jane'}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName()); //Jane
;
var rectangle = {
    height: 20,
    width: 10
};
var rect = {
    height: 50,
    width: 40
};
console.log(rectangle); //{ height: 20, width: 10 }
console.log(rect); //{ height: 50, width: 40 }
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle); //{ height: 20, width: 10, color: 'red' }
// *--------------------casting -----------------------*
var x = 'hellow';
console.log(x.length); //6
var xa = 'hello';
console.log(xa.length); //5
var xaa = 1253;
console.log(xaa);
//*------------generic ------------------------------ */
function indentity(arg) {
    return arg;
}
var output = indentity("mystring");
var output1 = indentity(100);
console.log(output);
console.log(output1);
var pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
pointPart.y = 10;
console.log(pointPart); //{ x: 10, y: 10 }
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);
// --------------------------
var value = null;
console.log(typeof value); //object
value = 'hello';
console.log(typeof value); //undefine
value = undefined;
console.log(typeof value); // null
