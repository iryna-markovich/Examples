function binarySearch(arr, key){
    let left = 0;
    let right = arr.length - 1;

    while(true){
        let mid = Math.floor(left + (right - left)/2);
        if(key == arr[mid]){
            return mid;
        }
        if(key > arr[mid]){
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
}

binarySearch([1,7,8,10,12,15,59], 7); //array should be sorted