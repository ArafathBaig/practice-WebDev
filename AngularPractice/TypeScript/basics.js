var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age = 24;
var username = "Dumuku";
var hobbies;
hobbies = ["Sports", "Cooking"];
var person;
person = {
    name: "Max",
    age: 32
};
var people;
var course = 1232;
console.log(course);
function add(a, b) {
    return a + b;
}
var value = add(3, 5);
console.log(value);
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
var Student = /** @class */ (function () {
    function Student(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourse = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student("Max", "Schwarz", 32, ["Angular"]);
console.log(student.listCourse());
