"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function salarySum(salary){
    let sum = 0;
    for(let name in salary){
        sum += salary[name];
    }
    return sum;
}

salarySum(salaries);