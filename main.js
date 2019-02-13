"use strict";
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let expenses = {};
let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");
let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
let answer4 = prompt("Во сколько обойдется?");
expenses[answer1] = answer2;
expenses[answer3] = answer4;
let appData = {
   budget: money,
   timeData: time,
   expenses: expenses,
   optionalExpenses: [],
   savings: false
};
alert(money/30);
console.log(appData);