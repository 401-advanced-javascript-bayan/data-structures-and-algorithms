'use strict';

const insertion = require('../sort.js');


describe('Insertion' , ()=> {


  it('Sort an array ', ()=> {
    expect(insertion([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });

  it('Sort an array with length of 2 ', ()=> {
    expect(insertion([1,3])).toEqual([1,3]);
  });

});