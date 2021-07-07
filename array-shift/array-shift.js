'use strict';
function insertShiftArray(arr,value){
    let middleArray = Math.floor(arr.length / 2);    // we used math.floor cuz we can have random nambers
        let newArray = [];
    
        for (let i = 0; i < arr.length; ++i) {
            if (i < middleArray){newArray[i] = arr[i]; }
            if (i == middleArray){newArray[i] = value;}    
            if (i > middleArray){newArray[i] = arr[i - 1];}
        }
        return newArray;
    }
    console.log(insertShiftArray);
    module.exports = insertShiftArray;