
const LinkedList = require('../lib/ll-merge.js');
describe('linkedlist Module',()=>{
  it ('constructor',()=>{
    let list = new LinkedList();
    expect(list.head).toBeNull();

  });
  it('We will insert()',()=>{
    let list = new LinkedList();
    let initialValue = 'first value';
    list.insert(initialValue);
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.value.next).toBeAnObject;
  
  });
  it('We will merge list()',()=>{
    let list = new LinkedList();
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.insert(1);
    list2.insert(2);
    list1.insert(3);
    list2.insert(4);
    list.mergeLists(list1,list2);
    expect(list.head.next.value).toEqual(2);

  });
});