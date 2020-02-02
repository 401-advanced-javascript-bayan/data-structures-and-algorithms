'use strict';

const LinkedList = require('./lib/ll-insertion.js');

let ll = new LinkedList();

describe('Linked List', () => {

  beforeEach(() => {
    ll = new LinkedList();
  });

  it('Can successfully instantiate an empty linked list', () => {
    expect(ll.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    ll.insert(5);
    expect(ll.head.value).toEqual(5);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    ll.insert('this is the head'); 
    ll.insert(3);
    ll.insert(6);
    expect(ll.head.value).toEqual('this is the head');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    ll.insert(4); 
    ll.insert(2);
    ll.insert(9);
    expect(typeof ll.head.next).toMatch('object');
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    ll.insert('bayan'); 
    ll.insert('jenan');
    ll.insert('lenna');
    expect(ll.includes('bayan')).toBeTruthy();

  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    ll.insert('bayan'); 
    ll.insert('jenan');
    ll.insert('lenna');
    expect(ll.includes('jenan-lenna')).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    ll.insert('bayan'); 
    ll.insert('jenan');
    ll.insert('lenna');
    expect(ll.toString()).toMatch('bayan -> jenan -> lenna -> NULL');
  });

  it('Can successfully add a node to the end of the linked list', () => {
    ll.insert('bayan'); 
    ll.insert('jenan');
    ll.insert('lenna');
    expect(ll.toString()).toMatch('bayan -> jenan -> lenna -> NULL');
  });

  it('insertBefore()',()=>{
    let list = new LinkedList();
    let initialValue = 'first value';
    list.append(initialValue);
    list.insertBefore(initialValue,'second value');
    expect(list.head.value).toEqual('second value');
  });
  it('insertAfter()',()=>{
    let list = new LinkedList();
    let initialValue = 'first value';
    list.append(initialValue);
    list.insertAfter(initialValue,'second value');
    expect(list.head.value).toEqual('first value');
    expect(list.head.value.next).toBeAnObject;
  });

});