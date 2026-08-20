// Maximum difference in given array  or  Best time to Buy/Sell Stock.

let arr = [5, 2, 7, 9, 1, 6, 3];

let smallest = arr[0];
let maxDifference = 0;

for (let i=0;i<=arr.length;i++){
    let difference = arr[i] - smallest;  // 2
    if (difference > maxDifference) {
        maxDifference = difference;//7
    } 
    if (arr[i] < smallest){
        smallest = arr[i];
    }
}

console.log(maxDifference);
console.log(smallest);



