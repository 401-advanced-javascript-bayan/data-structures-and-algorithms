'use strict' ;


const LinkedList = require('../lib/ll-kth-from-end.js').default;

let ll = new LinkedList();
describe('Linked List', () => {

    beforeEach(() => {
        ll = new LinkedList();
    });
    
    it('tests where k is greater than the length of the linked list ', () => {
        ll.insert(1); 
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5); 

        expect(ll.kthFromEnd(7)).toMatch("exception")
    });

    it('tests where k and the length of the list are the same', () => {
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.insert('d');
        ll.insert('f'); 

        expect(ll.kthFromEnd(5)).toMatch("exception")
    });

    it('tests where k is not a positive integer ', () => {
        ll.insert('ss');
        ll.insert('dd');
        ll.insert('ff');
        ll.insert('gg');
        ll.insert('rr'); 

        expect(ll.kthFromEnd(-3)).toMatch("exception")
    })

    it('tests where the linked list is of a size 1', () => {
        ll.insert('rr'); 

        expect(ll.kthFromEnd(1)).toMatch("exception")
    });

    it('tests where k is not at the end, but somewhere in the middle of the linked list', () => {
        ll.insert('ss');
        ll.insert('dd');
        ll.insert('ff');
        ll.insert('gg');
        ll.insert('rr'); 

        expect(ll.kthFromEnd(2)).toMatch("ff")
    })



})