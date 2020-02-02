class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
  
class LinkedList {
  constructor() {
    this.head = null;
  }
  ////////////////////////////////////////// create node////////////////////////
  insert(value) {
  
    let node = new Node(value);
  
    if (!this.head) {
      this.head = node;
      return this;
    }
  
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
  
    currentNode.next = node;
    return this;
  }
  /////////////////////////////////////// check on the list ///////////////////////
  
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }
   ////////////////////////////////// string /////////////////////////////////////
  toString() {
    let currentNode = this.head;
    let linkedListString = '';
    while (currentNode) {
      linkedListString += ` ${currentNode.value} ->`;
      currentNode = currentNode.next;
    }
    return linkedListString += ` NULL`;
  }
  /////////////////////appened /////////////////////////
  append(value) {
    let node = new Node(value);    // it will be like include 
  
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  //////////////////////////////inser-before /////////////
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    let preNode = null;
  
    while (currentNode) {
      if (currentNode.value === value) {
        if (preNode === null) {
          this.head = newNode;
        }
        else {
          preNode.next = newNode;
        }
        newNode.next = currentNode;
        break;
      }
      preNode = currentNode;
      currentNode = currentNode.next;
    }
  }
////////////////////////insert-after ////////////////////  
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    let savedVal = null;
  
    while (currentNode) {
      if (currentNode.value === value) {
        savedVal = currentNode.next;
        currentNode.next = newNode;
        newNode.next = savedVal;
      }
      currentNode = currentNode.next;
    }
  }
}
  
  
module.exports = LinkedList;
