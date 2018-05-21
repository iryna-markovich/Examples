function getMaxSubSum(arr) {
    let sumArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            sumArr.push(sum);
        }
    }
    return getMaxOfArray(sumArr);
}

function getMaxOfArray(sumArr) {
    if (sumArr.length === 0 || Math.max.apply(null, sumArr) < 0) return 0;
    return Math.max.apply(null, sumArr);
}

let a = [-1, 2, 3, -9, 11];
getMaxSubSum(a);