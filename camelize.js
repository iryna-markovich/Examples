camelize("back-ground-color");

function camelize(str) {
  let sum = '';
  let strNew = [];
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[0] == "-") {
      strArr.splice(0, 1);
    }
    if (strArr[i] == "-") {
      strArr.splice(i, 1);
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  for (let j = 0; j < strArr.length; j++) {
    sum += strArr[j];
  }
  strNew.push(sum);
  return strNew.toString();
}