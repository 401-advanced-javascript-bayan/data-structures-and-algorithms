// function fibonacci( n)  {
//     if(n == 0)
//         return 0;
//     else if(n == 1)
//       return 1;
//    else
//       return fibonacci(n - 1) + fibonacci(n - 2);
// }


 ///////////////// fibonacc  function ////////////////

function FibonacciSequence(integer) {
    let result = 0;
    let num1 = 0;
    let num2 = 1;
    let counter = 0;
    if (integer === 0) {
        return 0;
    } else if (integer === 1) {
        return 1;
    }
    while (counter < integer) { // we used while to fine fibonacc number
        result = num1 + num2;
        num1 = num2
        num2 = result;
        counter++;         
    }
    return num1;
}
// console.log (FibonacciSequence);

///////////////////////sumtion function //////////////////

function sumtionMatrix(arr){     // metrix - inested array 
 let  finalValue =[]
    for(let i=0;i<arr.length;i++){
        let sum= 0;  
            for(let j=0;j<arr[i].length;j++){
            sum = sum + arr[i][j]
        }
       finalValue[i] = sum ;  // this value it will be an item inside the array
    }
    return finalValue
}
//console.log(sumtionMatrix)