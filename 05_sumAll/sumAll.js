const sumAll = function(left, right) {
    let sum = 0;
    if(left > right) {
        [left, right] = [right,left]
    }
    if(left < 0 || right < 0) return 'ERROR';
    if(!Number.isInteger(left) || !Number.isInteger(right)) return 'ERROR';
    for( let i = left; i <= right; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
