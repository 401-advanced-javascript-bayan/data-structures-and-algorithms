'use strict' ;
class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  module.exports = Node;
  
class LinkedList {
  constructor(){
    this.head = null;
  }
  insert (value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  // check if list1 , list2 are linked lists or at  least one  is linked list
  mergeLists(list1, list2){
    let currentNodeOne = list1.head;
    let currentNodeTwo = list2.head;
    while(currentNodeOne || currentNodeTwo){
      if(currentNodeOne){
        this.insert(currentNodeOne.value);
        currentNodeOne = currentNodeOne.next;
      }
      if(currentNodeTwo){
        this.insert(currentNodeTwo.value);
        currentNodeTwo = currentNodeTwo.next;
      }

    }
    return this;
  }



}
module.exports = LinkedList;
