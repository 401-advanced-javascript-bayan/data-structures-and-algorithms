'use strict' ;

const LinkedList = require('../lib/ll-kth-from-end.js');

describe(' LinkedList Module ', () => {
  let testLL = new LinkedList();
  it(' LinkedList Constructor ', () => {
    expect(testLL.head).toEqual(null);
  });

  it(' Insert() new node with value ', () => {
    let value = 'lenna';
    testLL.insert(value);
    expect(testLL.head.value).toEqual(value);
    expect(typeof (testLL.head.next)).toEqual('object');
  });

  it(' Includes() node\'s value if exist ', () => {
    let value = 'lenna';
    testLL.includes(value);
    expect(testLL.head.value).toEqual(value);
  });

 
  it(' append() add new node at the end of the list ', () => {
    let value = 'lenna';
    testLL.insert(value);
    expect(testLL.head.value).toEqual('lenna');
    expect(testLL.head.value).toEqual(value);
  });

  
  it('llkthFromEnd(k) return k negative number since K < 0  ', () => {
    // head -> [1] -> [3] -> [8] -> [2] -> X  k=0  output=2
    let testLL = new LinkedList();
    testLL.insert('10');
    testLL.insert('30');
    testLL.insert('50');
    testLL.insert('70');
    expect(testLL.llkthFromEnd(-1)).toEqual('K negative Number');
  });

  


}); 
