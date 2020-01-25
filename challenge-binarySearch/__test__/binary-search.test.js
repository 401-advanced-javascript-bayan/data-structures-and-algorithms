'use strict';
const bArray = require('../binary-search');
describe('Validitor Module',()=>{
    it('if the element inside  my array',()=>{
        expect(bArray(2,4,5],4)).toEqual(2)
    })
    it('element not inside my array will return null',()=>{
        expect(bArray([1,2,3],5)).toEqual(null)
    })
})