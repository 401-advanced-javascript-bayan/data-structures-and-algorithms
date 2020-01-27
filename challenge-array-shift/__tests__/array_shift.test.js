
const arrayShift = require('../lib/array_shift.js');

describe(' (middle of an array)', ()=>{
    it(' insert a value in the middle of an array',()=>{
        
        let arr = arrayShift([3, 4, 5,0, 8, 7], 8);
        expect(arr[3]).toEqual(8)
        
        })
})

describe(' (array.length is even number)', ()=>{
    it(' insert a value in the middle of an array',()=>{
       
        expect(arrayShift([1,2, 3, 4], 5)).toEqual([1, 2,5, 3,4])
    })
})

