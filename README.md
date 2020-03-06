# data-structures-and-algorithms
Challenge Description
The quick sort method of sorting data sorts the data by comparison, but is different than insertion sort. This method requires choosing a pivote item in the array to use as a comparison to split the array into two sides, the left being the low side and the right being the high side. The algorithm continues breaking the array into smaller units through high/low variables encapsulating the next set inside the array and continues partitioning until the array is fully sorted.

Approach & Efficiency
To implement this approach I used a quickSort method to handle defining the variables which encapsulate pieces of the array which then get passed into the partition function call. The partition function handles dividing the array by swapping indexes. This swapping happens inside of the swapping function which gets called once the partition function finds when low is pointing at a number higher than the pivot, and high is pointing at a number lower than the index.

(big o):
 o(nlogo) cuz we have hat for each thing you have to do extra work proportional to the number of digits in the count describing what it is you are looking at. Not a lot, because typically the number of digits in a number is way smaller than the value  
uml
![](https://github.com/401-advanced-javascript-bayan/data-structures-and-algorithms/blob/code28/image/1_Wb7sjviC18Hj5yRS6CdqKw.jpeg)
