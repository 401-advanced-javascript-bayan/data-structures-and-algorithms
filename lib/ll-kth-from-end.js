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
     ////////////////////////////////// insert-befor ///////////////////
    insertBefore(value, newVal) {
      let newNode = new Node(newVal);
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
  //////////////////////////////// insert-after ///////////////////////////
    insertAfter(value, newVal) {
      let newNode = new Node(newVal);
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
  
  ///////////////// k-form ////////////////////
   
 
  llkthFromEnd(k){
    let currentNode = this.head;
    if(k<0) { return 'K negative Number'};

    if(this.length === 1) { return currentNode.value};

    if(this.length< k){return 'Exception';}
    if(this.length >= k){

      for(let i = 0;i<this.length-k-1;i++){
        
        currentNode = currentNode.next;
      
      }
     
      return currentNode.value;
    }
  } 

} 


const ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.llkthFromEnd(1);
module.exports = LinkedList;