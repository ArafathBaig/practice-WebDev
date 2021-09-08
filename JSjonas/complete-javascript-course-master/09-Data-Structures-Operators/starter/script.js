"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ startedIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved ${this.starterMenu[startedIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(...arr) {
    console.log(arr);
  },

  orderPizza(mainIngredient, ...optionalIngredient) {
    console.log(mainIngredient);
    console.log(optionalIngredient);
  },
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) console.log(`${i}: ${el}`);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//STrings java

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(airline.charAt(4));

console.log(airline.slice(4, 7));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle Seat");
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
//Coding challenges 3

// const differentEvent = [...new Set(gameEvents.values())];

// console.log(differentEvent);

// for (const [key, value] of gameEvents.entries()) {
//   const str = key >= 45 ? "[FIRST HALF]" : "[SECOND HALF]";

//   console.log(`${str} ${key}: ${value}`);
// }
// gameEvents.delete(64);

// //Maps

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try again"],
// ]);

// console.log(question);

// const hoursMap = new Map(Object.entries(restaurant.openingHours));

// console.log(hoursMap);

// for (const [key, value] of question) {
//   console.log(key, value);
// }

// // const answer = Number(prompt("Guess answer?"));

// // console.log(question.get(question.get("correct") === answer));

// console.log([...question.keys()]);

// const rest = new Map();

// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");
// rest
//   .set("categories", restaurant.categories)
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are close");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// console.log(rest.get("categories"));

// SET

// const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pasta"]);

// console.log(ordersSet);

// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.size);

// ordersSet.add("GarlicBread");
// ordersSet.delete("Risotto");

// const staff = ["Waiter", "Staff"];

// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);

//CODING CHALLENGE 2

// const obj = {};

// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal}: ${player}`);

//   obj[player]++ || (obj[player] = 1);
// }
//  avg = 0;

// let
// for (const [name, bet] of Object.entries(game.odds)) {
//   avg += bet;

//   const teamStr = name === "x" ? "draw" : "victory " + game[name];
//   console.log(`Odd of ${teamStr}: ${bet}`);
// }

// console.log(avg / Object.values(game.odds).length);

// console.log(obj);
// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// const values = Object.values(restaurant.openingHours);

// console.log(values);

// const entries = Object.entries(restaurant.openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// //OPTION CHAINGING

// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";

//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods

// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// //Array

// const users = [
//   {
//     name: "Jonas",
//     email: "hello@jonas",
//   },
// ];

// console.log(users[0]?.name ?? "Users array empty");

// const [players1, players2] = game.players;

// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];

// console.log(allPlayers);

// const finalTeam = [...players1, "Thiago", "Countinho", "Perisic"];

// console.log(finalTeam);

// const { team1: t1, x: d, team2: t2 } = game.odds;

// console.log(t1, d, t2);

// const printGoals = function (...goalsScoredBy) {
//   for (let i = 0; i < goalsScoredBy.length; i++) {
//     console.log(goalsScoredBy[i]);
//   }
// };

// // NULLISH COALESCING OPERATOR
// const guestCorrect =

// // REST PATTERN

// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// //OBJECTS

// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);

// //FUNCTIONS
// const add = function (...numbers) {
//   console.log(numbers);

//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];

// add(...x);

// restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];

// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// const str = "Arafath";
// const letter = [...str];
// console.log(letter);

// restaurant.orderPasta("a", "b", "c");

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // [main, secondary] = [secondary, main];

// // console.log(main, secondary);

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // const nested = [2, 5, 6, [3, 2, 4]];

// // const [i, , , [j, k]] = nested;
// // console.log(i, j, k);

// // // Default value

// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// // let a, b;
// // const obj = {
// //   a: 23,
// //   b: 7,
// //   c: 14,
// // }(({ a, b } = obj));

// //nested object

// const {
//   fri: { open: shopOpenTime, close: shopCloseTime },
// } = openingHours;
// console.log(shopOpenTime, shopCloseTime);
