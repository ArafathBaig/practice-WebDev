var age: number = 24;
var username: string = "Dumuku";

//Array of strings

type Person = {
  name: string;
  age: number;
};

var hobbies: string[];

hobbies = ["Sports", "Cooking"];

var person: Person;

person = {
  name: "Max",
  age: 32,
};

var people: {
  name: string;
  age: number;
}[];

var course = 1232;

console.log(course);

function add(a: number, b: number): number {
  return a + b;
}

var value = add(3, 5);
console.log(value);
