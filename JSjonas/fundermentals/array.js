// const friends = ['Michael'];
// friends.push('Jay');

// console.log(friends);

// friends.unshift('John');

// console.log(friends)

// //remove elements

// console.log(friends.indexOf('Jay'))
// friends.shift();

// console.log(friends);

// const namee = {
//     firstName: 'Rasheed',
//     lastName: 'Bhai',
//     age: 2021 - 1997,
//     job: 'Teacher',
//     friends: ["Dumpak", "Silaki", "Gilli"]
// }

// console.log(namee);

// console.log(namee['firstName'])

// namee.location = 'America';
// namee['insta'] = "@americanHero"

// console.log(namee)

const namee = {
    firstName: 'Rasheed',
    lastName: 'Bhai',
    age: 1997,
    job: 'Teacher',
    friends: ["Dumpak", "Silaki", "Gilli"],
    hasDriversLicense: true,
    // calcAge: function (birhtYear) {
    //     return 2037 - birhtYear;
    // }
    calcAge: function () {
        console.log(this);
        return 2037 - this.age;
    }
}

console.log(namee.calcAge())