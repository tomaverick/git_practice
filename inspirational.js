let inspireQuote = {
    _part1: [
        "Life's meaning is ", "The result in life is ", 
"All you need to remember is ", "The most important thing is ", 
"The wise one knows "
    ],
    _part2: [
        "that love ", "that work ", "that money ", 
"that power ", "that wealth ", "that luxury living ", 
"that money making mindest ", "that ownership ", "that leadership ", 
"that your leadership ", "your money ", "your wealth "
    ],
    _part3: [
        "is infinite.", "is abundant.", "is everywhere and always.", 
"is existing in its purest form.", "is for the good of mankind", 
"is valuable.", "comes from love.", 
"is so practical to life that life wouldn't be fair without it.", 
"is power to do great things for humanity.", 
"is for the well-being of humanity.", 
"is more than necessary, it's a gift to be cherished.", 
"is a life quality multiplier.", "is whatever you choose it to be for you.",
"is whatever you choose to believe it is.", 
"is not to be feared, but to be taken up responsibly.", 
"is to be appreciated."
    ],
    generateInspiration() {
        let quote = '';
        for(let i = 1; i <= 3; i++){
            quote += this['_part'+i][Math.floor(Math.random()*this['_part'+i].length)];
        }
    
        return quote;
    }
} 

console.log(inspireQuote.generateInspiration());