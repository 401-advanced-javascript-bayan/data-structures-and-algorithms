'use strict';


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }

        /////////////////////// create new node /////////////////////////
    insert(value) {
        let  node = new Node(value);
        if (!this.head) {
            this.head = node;
            // this.length++
             
            return  this;
        }else{
        
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }  
        currentNode.next = node;
        this.length++ ;

               return this;
      }
    }
     ///////////////////////////////// check on the list //////////////////////
    
    includes(value) {
        
        
        
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {  // if my value so go to next node
                currentNode = currentNode.next;
                return true;
            }
            return false;   
        }
        
    }  
}
   
// ///////////////////////////////////////////////////////// to be string






module.exports= LinkedList
   