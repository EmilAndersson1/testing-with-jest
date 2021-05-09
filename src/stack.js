var _ = require("underscore");

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
  stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
  return stack.push();
};

// Returnerar det översta elementet i stacken
exports.peak = function () {
  return _.last(stack); // Det här är medvetet felaktigt
};
