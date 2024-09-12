const fibonacci = function(count) {
    if(count < 0) return "OOPS";
    let x = 0;
    let y = 1;
    let z;
    while(count != 0){
        z = x + y;
        x = y;
        y = z;
        count--;
    }
    return x;
}

// Do not edit below this line
module.exports = fibonacci;
