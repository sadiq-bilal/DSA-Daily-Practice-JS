// Remove Duplicate Elements from an sorted array
// Method 01
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

// Method 03
let arr = [1,2,3,3,3,4,4,5];

let j = 0;// 5*  j-val = 4
         // 7   i-val = 5
for (let i = 1; i < arr.length; i++) {
    
    if (arr[i] !== arr[j]) {
        j++;
       // 5
        arr[j] = arr[i];  //[1,2,3,4,5,4,4,5]
    }
}

console.log(arr.slice(0, j + 1));
