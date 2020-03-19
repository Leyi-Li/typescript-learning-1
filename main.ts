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
myValue1();
myValue1.toUpperCase();

let myValue2: unknown = 10;
//for unknown we cannot just use it as any
(myValue2 as string).toUpperCase();

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

