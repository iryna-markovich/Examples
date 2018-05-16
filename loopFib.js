let loopFib = function(n) {
    let a = 0; 
    let b = 1;
    let f = 0;
    for(let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

loopFib(12);