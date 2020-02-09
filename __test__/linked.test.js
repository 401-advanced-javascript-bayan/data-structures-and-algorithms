'use strict';

const LinkedList = require('../lib/linked.js');

let list = new LinkedList();

describe('Linked List', () => {

  beforeEach(() => {
    list = new LinkedList();
  });

  it('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    list.insert(100);
    expect(list.head.value).toEqual(100);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    list.insert('head');
    list.insert(7);
    list.insert(6);
    expect(list.head.value).toEqual('head');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(typeof list.head.next).toMatch('object');
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    list.insert('odd');
    list.insert('even');
    list.insert('zero');
    expect(list.includes('even')).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    list.insert('bayan');
    list.insert('mai');
    list.insert('muna');
    expect(list.includes('mai-muna')).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    list.insert('nawal');
    list.insert('dania');
    list.insert('gorob');
    expect(list.toString()).toMatch('nawal -> dania -> gorob -> NULL');
  });

});