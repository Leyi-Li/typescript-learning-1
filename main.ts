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
