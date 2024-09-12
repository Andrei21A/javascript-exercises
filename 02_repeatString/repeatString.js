const repeatString = function(word,repeatNumber) {
    let repetitionWord ='';
    if(repeatNumber < 0) {
        return 'ERROR';
    }
    while(repeatNumber > 0) {
        repetitionWord += word;
        repeatNumber--;
    }
    return repetitionWord;
};

console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
