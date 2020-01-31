//////////////// binary search ////////////
// let v= [1,2,3,5];
// let w= 3;

function binarySearch(arr, value) {

  let initial = 0;
  let final= arr.length;
  // let final= arr.length;  will  reapeat the answer
 

  while (initial <= final) {

    let middle = Math.floor((initial + final) / 2);
    // middle == value being searched

    if (arr[middle] === value){

       
      return middle;

    } else if  (arr[middle] < value) {   // move the initial up one 
      initial = middle + 1;
      // console.log( initial);
    }
    else {
      final= middle - 1;
      //   console.log(final);
    }
  }
  return -1;
}
// console.log(binarySearch(v,w));
module.exports=binarySearch;