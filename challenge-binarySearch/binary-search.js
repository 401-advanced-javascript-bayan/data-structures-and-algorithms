//////////////// binary search ////////////
let v= [1,2,3,5];
let w= 3;

function binarySearch(arr, value) {

    let initial = 0;
    let final= arr.length;
    // let final= arr.length;  will  reapeat the answer
    let middle = 0;

    while (initial < final) {

        let middle = Math.floor((initial + final) / 2);
       // middle == value being searched

        if (arr[middle] === value)
            return middle;

        if (arr[middle] < value) {   // move the initial up one 
            initial = middle + 1;
            // console.log( initial);
        }
        else {
            final= middle - 1;
        //   console.log(final);
        }
    }
    return null;
}
// console.log(binarySearch(v,w));
module.exports=binarySearch;
