'use strict';
const  challenge = require('../lib/interview.js');

describe('the first function in interview', () => {
    describe('this will test sumtion metrix', () => {

        it('Test the internal arrys in the main array', () => {
            const arr = [[1, 2, 3], [3, 5, 7], [1, 7, 10]]
            expect(challenge.sumtionMatrix(arr)).toEqual([6, 15, 18])
        })
    })
})

describe('the second function in interview', () => {
    it('it will  return the exact element of  given index based on fibonacci sequence', () => {
        expect(challenge.FibonacciSequence(6)).toEqual(8)
    })
    it('it will return the element based on fibonacci sequence same as  previuos test if the input is negative', () => {
        expect(challenge.FibonacciSequence(-8)).toEqual(-21)
    })
})
