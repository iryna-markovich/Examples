"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function maxSalary(salary){
    let max = 0;
    let maxSalaryName = "";
    for(let name in salary){
        if (max < salary[name]){
            max = salary[name];
            maxSalaryName = name;
        }
    }
    return maxSalaryName;
}

maxSalary(salaries);
