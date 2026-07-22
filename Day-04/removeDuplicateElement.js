// Remove Duplicate Elements

let dupNums = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7];
let originalNums = [];

originalNums.push(dupNums[0]);
// console.log(originalNums);
for (let i =1; i<= dupNums.length -1 ;i++){
    if(dupNums[i] !== dupNums[i-1]){
        originalNums.push(dupNums[i]); // inserting dunNums[i] into originalNums
    }
}
console.log(originalNums);