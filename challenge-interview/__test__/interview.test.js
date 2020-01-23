'use strict';

describe('Functions of the two interviews', () => {
    describe('this will test sumtion metrix', () => {

        it('Test the internal arrys in the main array', () => {
            const arr = [[1, 2, 3], [3, 5, 7], [1, 7, 10]]
            expect(functions.sumtionMatrix(arr)).toEqual([6, 15, 18])
        })
    })
})

