let apples: number = 4;

let speed: string = 'slow';

let date: Date = new Date();

//Arrays
let colors: string[] = ['red','blue','yellow'];
let truths: boolean[] = [true,false]

//Class

class Car {

}

let car: Car = new Car();

//object

let team: {teams:string; wins:number; lastGameWon: boolean} = {
    
    teams:'chelsea',
    wins:3,
    lastGameWon:true

}


//FUNCTIONS that return nothing

let logNumber: (i: number)=>void = (i: number) => {
    console.log(i);
}

// console.log(`
// Apples = ${apples}
// Speed = ${speed}
// Today's date is: ${date}`);

//When to use Anotations
// 1) Functions that return the any type

const json = '{"x": 1, "y": 2}'

const coordinates: { x: number; y: number }= JSON.parse(json)

//2) When initializing variables in multiline

let colors1: string[] = ['red', 'yellow', 'blue'];

let foundColor: boolean = false; // Initialize with a default value

for (let y = 0; y < colors1.length; y++) {
    if (colors1[y] === 'blkue') {
        foundColor = true;
        break; // Exit the loop once 'blue' is found
    } else {
        foundColor = false;
    }
}

console.log(foundColor);

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}



