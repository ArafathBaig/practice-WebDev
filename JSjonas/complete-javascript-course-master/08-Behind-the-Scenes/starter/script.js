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

var firstName = 'JJ';

const jonas = {
  name: 'Jonas',
  year: 1997,
  firstName: 'Schmeil',
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    const self = this;

    const isMillenial = function () {
      console.log(self);
      console.log(self.year);
    };

    isMillenial();

    //Solution2
    const isMillenialArrow = () => {
      console.log(this);
      console.log(this.year);
    };

    isMillenialArrow();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.calcAge();
