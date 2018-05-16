function init(arr){
    let initArr = [];
    for(let i = 0; i < arr.length - 1; i++){
        initArr.push(arr[i]);
    }
    return initArr;
  }
  init([1,5,7,9]);