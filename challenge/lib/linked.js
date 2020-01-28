'use strict';

class Node {
    constructor(value) {
        this.value = value;      // node                           //chear and easy ??!!
        this.next = null;
    }
}

class LinkedList {
    constructor() {                   /// in first case if there is nothing its null
        this.head = null
    }
////////////////////////////////////////// create node////////////////////////
    insert(value) {

        let node = new Node(value);

        if (!this.head) {
            this.head = node
            return this
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = node;
        return this
    }
/////////////////////////////////////// check on the list ///////////////////////
    includes(value) {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                return true
            } else {
                currentNode = currentNode.next
            }
        }
        return false
    }
////////////////////////////////// string /////////////////////////////////////
    toString() {
        let currentNode = this.head;           
        let string = ''
        while (currentNode) {                         // currentNode is head
           string += ` ${currentNode.value} ->`
            currentNode = currentNode.next;                 
        }
        return string += ` NULL`
    }
}


module.exports = LinkedList
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 