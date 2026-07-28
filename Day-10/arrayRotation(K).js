// Left Rotate Array by K posiions



let arr = [1, 2, 3, 4, 5]; // 5,4,1,2,3
let last = arr[arr.length - 1];
         // 0
for (let i = arr.length-1; i >0;i--){
        // 2      // 1 
    arr[i] = arr[i-1];
}

 arr[0]= last;

console.log(arr);

// let arr = [1, 2, 3, 4, 5];  // 3,4,5,1,2

function leftRotate (arr,k){
    k = k % arr.length;
    for (let i = 0; i < k; i++){
        
    }
}