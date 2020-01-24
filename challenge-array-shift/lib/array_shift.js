'use strict';


// in this function we will return an array with the new value added at the middle index.


function insertShiftArray(arr, val) {
    let middleArray = Math.floor(arr.length / 2);  /// we divid over 2 cuz its even length
    
////here we are raise the array with  index one  to the new value (arr.length + 1)
    let newArray = new Array(arr.length + 1);
    for (let i = 0; i <= middleArray; i++) {
        if (i === middleArray) { newArray[i] = val; }
        else { newArray[i] = arr[i]; }
    } //// here we shift the number in the array
    for (let s = middleArray; s <= arr.length - 1; s++) {
        newArray[s + 1] = arr[s];
    } return newArray;
}
module.exports = insertShiftArray; 
// console.log(insertShiftArray([1,2,3],4));

////////// another way //////
// function insertShiftArray(arr, val) {
//     let middle = Math.floor(arr.length / 2);
//     let newArray = [];
//     for (let i = 0; i <= arr.length; ++i) {
//         if (i < middle){newArray[i] = arr[i]; }
