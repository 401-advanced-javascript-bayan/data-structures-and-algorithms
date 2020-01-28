'use strict';
const Node = require('../lib/node.js');

class LinkedList {
  constructor() {
    this.head = null;   /// in first case if there is nothing its null
  }
 /////////////////////////// create node //////////////////////
  insert(value) {
    let node = new Node(value);



    if (!this.head) {            
      this.head = node;
    }
    
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node;
    return this;
  }
  ////////////////////////// check on the list ///////////////////////

  includes(value){
      let currentNode = this.head ;
      while (currentNode.next) {
     if(currentNode.next.val === value){
              return true ;
      }
      currentNode = currentNode.next ;
      }
      return false ;
    }
////////////////////////// To add new node  /////////////////////////
append(value){
    let node = new Node(value);                        
    if(!this.head){                                   // the node equal the first node in the list 
        this.head = node;
        return this.head;
    }  
    let currentNode = this.head;
     while(currentNode.next){
        currentNode = currentNode.next;
    }
    // console.log('currentNode' , currentNode)
    currentNode.next = node;
  
    return node;
  }
  
  }
  
  module.exports = LinkedList;
