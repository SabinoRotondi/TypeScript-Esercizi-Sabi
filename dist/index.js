"use strict";
function getPopulation() {
    return 69950850;
}
// Add a type assertion after the call to `getPopulation()`.
// Hint: What's the actual type of the value returned by `getPopulation()`?
// const population = <number> getPopulation(); //2 ways for type assertion
const population = getPopulation();
// Now you've added a type assertion, there's a type error in the code below.
// Remove the code that is incorrect.
// console.log(population.toUpperCase()); incorrect, it needs to be a number.
console.log(population * 2);
