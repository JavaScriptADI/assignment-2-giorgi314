// Work in this directory: src
// 1
let firstName = "giorgi";
console.log(`firstName ${firstName} the type of firstName is ${typeof firstName}`);

// 2
let firstNumber = 5;
let secondNumber = "5";
console.log(`firstNumber ${firstNumber} type of firstNumber is ${typeof firstNumber}`);
console.log(`secondNumber ${secondNumber} type of secondNumber is ${typeof secondNumber}`);

// 3
let ages = 25;
console.log(`age = ${ages} type of age is ${typeof ages}`);

// 4
let iAmAdult = true;
console.log(`Am I adult? ${iAmAdult} the type is ${typeof iAmAdult}`);

// 5
// && || !


// 6
let firstMessage = "hello";
firstMessage = firstMessage.toUpperCase();
console.log("6.", firstMessage);

// 7
let password = "World";
console.log("7.", password.toLowerCase());

// 8
let text = 'Hello';
text.toUpperCase();
console.log("8. before", text);
console.log("8. after", text.toUpperCase());

// 9
let text9;
console.log(text9);
// the value of the variable `text` is undefined

// 10
let text10 = 'Hello';
console.log("10.", text10.toLowerCase());
// error was lowecase c in toLowe'c'ase

// 11
let age = Number(prompt('How old are you?'));
let nextAge = age + 1;
console.log(`11. Next year you will be ${nextAge}`);

// 12
let name12 = prompt('What is your name?');
let age12 = Number(prompt('How old are you?'));
let isInSixties = 60 <= age12 && age12 < 70;
console.log(`12. ${name12} is in sixties: ${isInSixties}`);

// 13
let x = 5;
console.log(`13. ${x++}`);
// value = 5
console.log(`13. ${x}`);
// value = 6

// 14
let y = 5;
console.log(`14. ${++y}`);
// value =6
console.log(`14. ${y}`);
// value = 6


// 15
console.log('x++ = x + 1');
console.log('x-- = x - 1');

// 16
let h = 3;
console.log(`16. h=3 ++h = ${++h}`);
// if h=3 , ++h=4
let g = 3;
console.log(`16. g=3 g++ = ${g++}`);
// if g=3, g++=3


// 17
// If we try to declare variable without any value, 
// the value of the variable in the console  will be undefined
let variable;
console.log(variable);


// 18
let a = 7;
let b = 8;
console.log(`18. a==b ${a == b}`);

// 19
let c = 10;
let d = 12;
console.log(`19. c!=d ${c != d}`);

// 20
let e ="25"; //string
let f = 7; //number
console.log(`20. e+f= ${e+f}`);
// number won't be added to string. number will be spaced next to string