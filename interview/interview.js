// 'use strict';
// function fibonacci( n)  {
//     if(n == 0)
//         return 0;
//     else if(n == 1)
//       return 1;
//    else
//       return fibonacci(n - 1) + fibonacci(n - 2);
// }
function FibonacciSequence(intger) {
    let result = 0;
    let num1 = 0;
    let num2 = 1;
    let counter = 0;
    if (intger === 0) {return 0;
    } else if (intger === 1) {
        return 1;
    }
    while (counter< intger) {
        result = n1 + n2;
        num1 = num2
        num2 = result;
        counter++;
    }
    return n1;
}