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

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);

class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];

  constructor(first: string, last: string, age: number, courses: string[]) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourse() {
    return this.courses.slice();
  }
}

var student = new Student("Max", "Schwarz", 32, ["Angular"]);
console.log(student.listCourse());

//Interfaces

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;
max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("Hello!");
  },
};
