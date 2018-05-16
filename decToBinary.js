function decToBinary(number){
    let binNumber = [];
    let binNumberString = '';
    while(number > 0) {
        let rem = number % 2;
         binNumber.push(rem);
         number = Math.floor(number / 2);
    }

    while(binNumber.length > 0){
        binNumberString = binNumberString + binNumber.pop();
    }
    return binNumberString;
}
decToBinary(45);
