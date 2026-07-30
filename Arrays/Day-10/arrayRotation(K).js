//Right Rotate Array by K positions

let arr = [1, 2, 3, 4, 5, 6];  
let k = 350;
k = k %  arr.length; //8 % 6 = 2

for(let i = 0; i < k; i++){   // O(k)
    let last = arr[arr.length-1];
    for(let j = arr.length-1; j > 0; j--){ // O (n)
        arr[j] = arr[j - 1];
    }
    arr[0] = last;
}
console.log(arr);//[5,6,1,2,3,4] O(n*k) 


//Right Rotate Array by K positions

// let arr = [1, 2, 3, 4, 5, 6];  

// let k = 350;
// k = k %  arr.length; //8 % 6 = 2
//                    //2
// for (let i = 0; i < k; i++){ 
//     let first = arr[0]; // 2
                
//     for (let j = 0; j < arr.length-1;j++){ // [2,3,4,5,1]
//         // 4    // 4
//         arr[j] = arr[j+1]; // [3,4,5,1,1]
//     }
//     arr[arr.length-1] = first; // [3,4,5,1,2]
// }
// console.log(arr);