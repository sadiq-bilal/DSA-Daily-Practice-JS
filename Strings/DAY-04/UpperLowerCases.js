// Calculate the upper and lower letters count in a string.


let str = "Hello JAVAscript is the BEST";

let upperCaseCharacters = 0;
let lowerCaseCharacters = 0;
for (let char of str) {
    if (char === ' ') {
        continue;
    }
    else if (char === char.toUpperCase()) {
        upperCaseCharacters++;
    } else {
        lowerCaseCharacters++;
    } 
}        
console.log("UpperCase : ", upperCaseCharacters);
console.log("LowerCase : ", lowerCaseCharacters);