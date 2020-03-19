"use strict";
exports.__esModule = true;
var message = 'hello Leyla';
console.log(message);
var isBeginner = true;
var total = 0;
var name = 'Leyla';
//if assign name to true, it will show error 
//new line just hit return
var sentence = "My name is " + name + "\nI am new to typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3];
//[22, 'Chris'] or ['Chris', 22, 23] will not work
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//by default Red is 0, but if {Red = 5, Green, Blue} then c is 6
var randomValue = 10;
randomValue = true;
randomValue = 'Hello';
var myValue1 = 10;
console.log(myValue1.name);
//myValue1();
//myValue1.toUpperCase();
var myValue2 = 10;
//for unknown we cannot just use it as any
//(myValue2 as string).toUpperCase();
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myValue2)) {
    console.log(myValue2.name);
}
var a;
a = 10;
a = true;
var b = 20;
//cannot do b = true; it is assumed to be number type
var multiType;
multiType = 1;
multiType = false;
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
//cannot do add('10',2)
//optional parameter: optional is always after the required parameters
function add2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
add2(2);
//default parameter is optional parameter with set value or undefined
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
add3(2);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Lee'
};
fullName(p);
function customer(person) {
    console.log("Name: " + person.firstName + " " + person.lastName + ", phone: " + person.phoneNumber);
}
var p2 = {
    firstName: 'leyi',
    lastName: 'li',
    phoneNumber: 202
};
customer(p2);
