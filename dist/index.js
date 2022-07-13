"use strict";
var Currency;
(function (Currency) {
    Currency["Euro"] = "Euro";
    Currency["Dollar"] = "Dollar";
})(Currency || (Currency = {}));
const countries = [
    {
        name: "France",
        currency: Currency.Euro,
    },
    {
        name: "United States of America",
        currency: Currency.Dollar,
    },
    {
        name: "Italy",
        currency: Currency.Euro,
    },
    {
        name: "New Zealand",
        currency: Currency.Dollar,
    },
];
var LanguageStatus;
(function (LanguageStatus) {
    LanguageStatus["Primary"] = "Primary";
    LanguageStatus["Secondary"] = "Secondary";
})(LanguageStatus || (LanguageStatus = {}));
const countryLanguages = [
    { language: "Spanish", status: LanguageStatus.Primary },
    { language: "English", status: LanguageStatus.Secondary },
];
