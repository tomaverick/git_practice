let part1 = ["Life is ", "The goal in life is ", 
"All you need to remember is ", "The most important thing is ", 
"The wise one knows "];

let part2 = ["that love ", "that work ", "that money ", 
"that power ", "that wealth ", "that luxury living ", 
"that money making mindest ", "that ownership ", "leadership ", 
"your leadership ", "your money ", "your wealth "];

let part3 = ["is infinite.", "is abundant.", "everywhere and always.", 
"existing in its purest form.", "is for the good of mankind", 
"is valuable.", "comes from love.", 
"is so practical to life that life wouldn't be fair without it.", 
"is power to do great things for humanity.", 
"is for the well-being of humanity.", 
"is more than necessary, it's a gift to be cherished.", 
"is a life quality multiplier.", "is whatever you choose it to be for you.",
"is whatever you choose to believe it is.", 
"is not to be feared, but to be taken up responsibly.", "is to be appreciated"];

function generateInspiration(){
    let textIndex1 = Math.floor(Math.random()*part1.length);
    let textIndex2 = Math.floor(Math.random()*part2.length);
    let textIndex3 = Math.floor(Math.random()*part3.length);

    return part1[textIndex1] + part2[textIndex2] + part3[textIndex3];
}

console.log(generateInspiration());