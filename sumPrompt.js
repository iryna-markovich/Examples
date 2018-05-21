let arr = [];

while (true) {

    let value = prompt("Add a number", 0);

    if (value === " " || value === null || isNaN(value)) {
        break;
    }
    arr.push(+value);
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {

    sum += arr[i];

}

sum;