export{}

let message = 'hello Leyla';
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Leyla';

//if assign name to true, it will show error 

//new line just hit return
let sentence: string = `My name is ${name}
I am new to typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3];

//[22, 'Chris'] or ['Chris', 22, 23] will not work
let person1: [string, number] = ['Chris', 22];

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c);

//by default Red is 0, but if {Red = 5, Green, Blue} then c is 6

let randomValue: any = 10;
randomValue = true;
randomValue = 'Hello';

let myValue1: any = 10;
console.log(myValue1.name);
//myValue1();
//myValue1.toUpperCase();

let myValue2: unknown = 10;
//for unknown we cannot just use it as any
//(myValue2 as string).toUpperCase();

function hasName(obj: any): obj is { name:string } {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj
}

if (hasName(myValue2)) {
    console.log(myValue2.name);
}

let a;
a = 10;
a = true;

let b = 20;
//cannot do b = true; it is assumed to be number type

let multiType: number | boolean;
multiType = 1;
multiType = false;

function add(num1: number, num2: number) : number{
    return num1 + num2;
}

add(2,3);
//cannot do add('10',2)

//optional parameter: optional is always after the required parameters

function add2(num1: number, num2?: number) : number{
    if(num2){
        return num1 + num2;
    }
    return num1;
}

add2(2);

//default parameter is optional parameter with set value or undefined
function add3(num1: number, num2: number = 10) : number{
    if(num2){
        return num1 + num2;
    }
    return num1;
}

add3(2);

function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Lee'
}

fullName(p);

//interface

interface Person{
    firstName: string;
    lastName?: string;
    phoneNumber: number;
}
function customer(person: Person) {
    console.log(`Name: ${person.firstName} ${person.lastName}, phone: ${person.phoneNumber}`);
}

let p2 = {
    firstName: 'leyi',
    lastName: 'li',
    phoneNumber: 202
};

customer(p2);

//class, access modifier

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`hello ${this.employeeName}`);
    }
}

let emp1 = new Employee('Leyla');
console.log(emp1.employeeName);
emp1.greet();

//inheritence
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');

m1.delegateWork();
m1.greet();
console.log(m1.employeeName);