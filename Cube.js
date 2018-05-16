function cube(a) {
    let cubeArr = [];
    for (let k = 0; k < a; k++) {
        let cubeMid = [];
        for (let i = 0; i < a; i++) {
            let cubeArrInner = [];
            for (let j = 0; j < a; j++) {
                cubeArrInner.push(j);
            }
            cubeMid.push(cubeArrInner);
        }
        cubeArr.push(cubeMid);
    }
    return cubeArr;
    console.log(cubeArrInner);
}
cube(3);