function simpleNum(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr2 = [];
        if (arr[i] > 2 && arr[i] % 2 != 0) {
            tempArr2.push(arr[i]);
            for (let i = 0; i < tempArr2.length; i++) {
                let tempArr3 = [];
                if (tempArr2[i] > 3 && tempArr2[i] % 3 != 0) {
                    tempArr3.push(tempArr2[i]);
                    for (let i = 0; i < tempArr3.length; i++) {
                        let tempArr5 = [];
                        if (tempArr3[i] > 5 && tempArr3[i] % 5 != 0) {
                            tempArr5.push(tempArr3[i]);
                            for (let i = 0; i < tempArr5.length; i++) {
                                let tempArr7 = [];
                                if (tempArr5[i] > 7 && tempArr5[i] % 7 != 0) {
                                    newArr.push(tempArr5[i]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return newArr;
}



simpleNum([3, 6, 5, 2, 7, 0, 9, 22, 1, 8, 2, 8344, 2325, 143, 45, 33]);