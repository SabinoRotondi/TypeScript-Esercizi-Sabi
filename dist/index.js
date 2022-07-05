"use strict";
// Prevent the array from being modified.
// Use the generic interface type `ReadonlyArray`: ReadonlyArray<type>
// This will cause a type error. Remove the code that now has a type error.
const languages = ["Mongolian", "French", "Basque", "Thai"];
// languages[2] = "Hausa"; Error will be thrown if the array is readonly 
console.log(languages);
// Prevent the array from being modified.
// Use the readonly modifier and the array literal type syntax: readonly type[]
// This will cause a type error. Remove the code that now has a type error.
const currencies = ["NZD", "THB", "NGN", "EUR", "COP", "INR"];
// currencies.reverse(); cannot reverse because the array is readonly
console.log(currencies);
