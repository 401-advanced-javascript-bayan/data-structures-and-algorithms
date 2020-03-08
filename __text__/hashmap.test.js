'use strict';
let HashTable = require('../lib/hashmap.js');

describe('The correct functionality of a HashTable', () => {
  it ('Successfully adds a key/value to your hashtable results in the value being in the data structure', () => {
    let table = new HashTable(5);
    table.add('nada', 'student');
    expect(table.contains('nada')).toBe(true);
  });
  it ('Successfully retrieves based on a key returns the value stored', () => {
    let table = new HashTable(5);
    table.add('nada', 'student');
    expect(table.get('nada')).toMatch('student');
  });
  it ('Successfully returns null for a key that does not exist in the hashtable', () => {
    let table = new HashTable(5);
    table.add('nada', 'student');
    expect(table.get('Wyatt')).toBeNull();
  });
  it ('Successfully handle a collision within the hashtable', () => {
    let table = new HashTable(5);
    table.add('lena', 'student');
    table.add('lena', 'professor');
    expect(table.storage[1][0][0]).toBe('lena');
    expect(table.storage[1][1][0]).toBe('lena');
  });
  it ('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let table = new HashTable(5);
    table.add('lena', 'student');
    table.add('lena', 'professor');
    expect(table.get('lena')).toMatch('professor');
  });
  it ('Successfully hash a key to an in-range value', () => {
    let table = new HashTable(5);
    expect(table.hash('nada')).toBe(1);
  });
  it ('Successfully removes an entry from the table', () => {
    let table = new HashTable(5);
    table.add('nada', 'student');
    table.remove('nada');
    expect(table.get('nada')).toBeNull();
  });
  it ('Successfully returns the items within the table', () => {
    let table = new HashTable(5);
    table.add('nada', 'student');
    table.add('nada', 'instructor');
    expect(table.print().length).toBe(2);
  });
});