'use strict';

// const jonas = {
//   name: 'Jonas',
//   year: 1997,
//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.year;
//   },
// };

// console.log(jonas.calcAge());

// const jj = {
//   year: 2017,
// };
// jj.calcAge = jonas.calcAge;

// console.log(jj.calcAge());

// var firstName = 'JJ';

// const jonas = {
//   name: 'Jonas',
//   year: 1997,
//   firstName: 'Schmeil',
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     //Solution 1
//     const self = this;

//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year);
//     };

//     isMillenial();

//     //Solution2
//     const isMillenialArrow = () => {
//       console.log(this);
//       console.log(this.year);
//     };

//     isMillenialArrow();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.calcAge();

const jessica = {
  name: 'jessi',
};

let otherJessica = new Object(jessica);
otherJessica.name = 'John';

//copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'BOB'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Cena';
jessicaCopy.family.push('Dumpak');
console.log(jessica2, jessicaCopy);
