"use strict";
const countryA = {
    name: "India",
    code: "IN",
    population: 1352642280,
};
const countryB = {
    name: "Italy",
    code: "IT"
};
const countryC = {
    name: "Spain",
    code: "ES",
    population: 47450795,
};
const currencyData = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};
// currencyData.name = "Gold"; removed cause of type error(name is readonly)
currencyData.code = "GGG";
