let toBinary = function(decNum){
    return parseInt(decNum, 10).toString(2);
    console.log(toBinary);
}
toBinary(45);


let toDecimal = function(binNum){
    return parseInt(binNum, 2).toString(10);
    console.log(toDecimal);
}
toDecimal(1010001);


let toOcta = function(decNum){
    return parseInt(decNum, 10).toString(8);
    console.log(toOcta);
}
toOcta(15216);


let toHex = function(decNum){
    return parseInt(decNum, 10).toString(16);
    console.log(toHex);
}
toHex(42);


let toOcta = function(hexNum){
    return parseInt(hexNum, 16).toString(8);
    console.log(toOcta);
}
toOcta(0x2a);


let toHex = function(octaNum){
    return parseInt(octaNum, 8).toString(16);
    console.log(toHex);
}
toHex(0442);