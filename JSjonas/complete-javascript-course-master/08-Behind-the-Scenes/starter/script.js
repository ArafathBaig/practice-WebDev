'use strict';

const jonas = {
  name: 'Jonas',
  year: 1997,
  calcAge: function () {
    console.log(this);
    return 2037 - this.year;
  },
};

console.log(jonas.calcAge());

const jj = {
  year: 2017,
};
jj.calcAge = jonas.calcAge;

console.log(jj.calcAge());
