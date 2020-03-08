# data-structures-and-algorithms
Challenge
Implement a Hashtable with the following methods:

add: takes in both a key and a value. This function should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.
Approach & Efficiency
My approach for this challenge was to first draw a diagram of what I was trying to accomplish. Then I wrote comments explaining what each step should be for each method within the class. The number of buckets within the hash table (hashtable length) is determined when the HashTable is instantiated by the number passed in to the class instance upon declaration. As for testing, I checked the return values to make sure they were correct in jest. The Big O of space is O(n) since a new array of key/value pairs is created for each table entry. The Big O of time depends on the method. Big O of:

hash is O(n)
add is O(n) (for update portion) and O(1) (for add portion)
remove is O(n)
get is O(n)
contains is O(n)
print is O(1)
UML
![](https://github.com/401-advanced-javascript-bayan/data-structures-and-algorithms/blob/code30/image/500px-Hash_table_5_0_1_1_1_1_0_LL.svg.png)
