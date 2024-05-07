// The Sum Selector : You are working on a fucntion that would sum all the numbers in an array until it encounters a negative number . Write a function to perform this summation.

// let arr = [12,2,5,23,-5,12]

// function sumSelector(arr) {
//     let summ = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < 0) {
//         break;
//       }
//       summ += arr[i];
//     }
//     return sum;
//     console.log(summ)}


function sumSelector(arr) {
    const index = arr.findIndex(num => num < 0);
    return index === -1? arr.reduce((a, b) => a + b, 0) : arr.slice(0, index).reduce((a, b) => a + b, 0);
  }

const array = [12, 2, -3, -1, 4, 5];
const result = sumSelector(array);
console.log(result);