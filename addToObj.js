var objO = {
    className: ""
}
let clsC = "new";

function addClass(obj, cls) {
    let keyValue = [];
    for (let key in obj) {
        keyValue.push(obj[key]);
        keyValue = keyValue.toString().split(' ');
        for (let i = 0; i < keyValue.length; i++) {
            if (keyValue[i] == cls) {
                return obj;
            }
        }
        keyValue.push(cls); 
        obj.className = keyValue.join(' ');
        return obj;
    }
}

addClass(objO, clsC);