'use strict';

const multi = require('../lib/multi-bracket-validation.js');
describe('multi ',()=>{
  it('return true to right formate of bracket',()=>{
    expect(multi('{}')).toEqual(true);
  });

  it('return true to right formate of bracket',()=>{
    expect(multi('{}(){}')).toEqual(true);
  });

  it('return true to right formate of bracket',()=>{
    expect(multi('(){}[[]]')).toEqual(true);
  });

  it('return false to wrong formate of bracket',()=>{
    expect(multi('[({}]')).toEqual(false);
  });

  it('return false to wrong formate of bracket',()=>{
    expect(multi('(](')).toEqual(false);
  });

  it('return false to wrong formate of bracket',()=>{
    expect(multi('{(})')).toEqual(false);
  });

  it('return false to empty string',()=>{
    expect(multi('')).toEqual(false);
  });
});