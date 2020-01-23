'use strict';
const reverseArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[arr.length - i - 1] = arr[i];
    }
    console.log(newArr);
    return newArr;
}