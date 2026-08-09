// Capitalize the First Letter of Every Word

// let str = "hhello world hello";
//   // Hello World Hello 
// let modstr = "";
// for (let i = 0; i < str.length; i++){
//     if (i === 0) {
//         modstr += str[i].toUpperCase();
//     } else if (str[i-1] === " ") {
//         modstr += str[i].toUpperCase();
//     } else {
//         modstr += "" +  str[i];
//     }
// }
// console.log(modstr);

let str = "hello world hello";
let arr = str.split(" ");
console.log(arr.length);

for (let i = 0; i < arr.length;i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].length);
}

console.log(arr);