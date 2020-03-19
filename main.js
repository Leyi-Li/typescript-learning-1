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
myValue1();
myValue1.toUpperCase();
var myValue2 = 10;
//for unknown we cannot just use it as any
myValue2.toUpperCase();
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
