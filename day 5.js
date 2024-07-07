//      MORNING

// function swapHeadAndTail(array) {
//     if (array.length < 2) {
//         return array; // If the array has 0 or 1 element, no change needed    
// }
//     let head = array[0];
//     let tail = array[array.length - 1];
//     array[0] = tail;
//     array[array.length - 1] = head;
//     return array;
// }
// let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let swappedArray = swapHeadAndTail(originalArray);
// console.log(swappedArray); // Outputs: [5, 2, 3, 4, 1]
// const swapHeadAndTail = (array) => {
//     if (array.length < 2) {
//         return array; // If the array has 0 or 1 element, no change needed
//     }    
//     // Swap head (first element) and tail (last element)
//     let head = array[0];
//     let tail = array[array.length - 1];
//     array[0] = tail;
//     array[array.length - 1] = head;
//     return array;
// }
// Example usage:
// let originalArray = [1, 2, 3, 4, 5];
// let swappedArray = swapHeadAndTail(originalArray);
// console.log(swappedArray); // Outputs: [5, 2, 3, 4, 1]

// const sortAndFormatString = (strings) => {
//     const sortedStrings = strings.sort();
//     const firstString = sortedStrings[0];
//     return firstString.split('').join('***');
// };
// const strings = ["take", "over", "bitcoin", "the", "world", "maybe", "who", "knows", "perhaps"];
// const result = sortAndFormatString(strings);
// console.log(result);

// const shortcut = (str) => {
//     return str.replace(/[aeiou]/g, '');
// };
// const exampleString = "Hello, world!";
// const result = shortcut(exampleString);
// console.log(result);  // Output: "Hll, wrld!"

