let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = 'blue';
color = 'red';

let fullName: string = `Bob\n Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

let list: number[] = [1, 2, 3];
let otherlist: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue): returnType {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet<T>(strign: T): T {
    return 'Hello, ' + this.greeting;
  }
}

interface Point {
  readonly x: number;
  readonly y: number;
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}

interface StringArray {
  [index: number]: string;
}

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
  public method() {}
}

interface Shape<T> {
  color: T;
}

interface Square extends Shape {
  sideLength: number;
}

const button = document.querySelector<HTMLButtonElement>('#button');
/wad/;
let square0: Square = {};

let square = <Square>{};
square.color = 'blue';
square.sideLength = 10;
// FIXME wadus

let square2 = {} as Square;
