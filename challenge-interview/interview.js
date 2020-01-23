// function fibonacci( n)  {
//     if(n == 0)
//         return 0;
//     else if(n == 1)
//       return 1;
//    else
//       return fibonacci(n - 1) + fibonacci(n - 2);
// }


 
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
console.log (FibonacciSequence);