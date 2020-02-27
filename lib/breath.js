/* eslint-disable indent */
'use strict';

class Node {
    constructor(value, left, right) {
      this.value = value;
      this.left = left || null;
      this.right = right || null;
    }
  }

class BreadthfirstTraversal {
  constructor(root = null){
    this.root = root;
  }
  breadthTraversal(){

    let result = [];
    let queue = [];
    if(this.root !== null){
      queue.push(this.root);
      while(queue.length > 0){
        let node = queue.shift();
        result.push(node.value);
        if(node.left !== null){
          queue.push(node.left);
        }
        if(node.right !== null){
          queue.push(node.right);
        }
      }
      return result;
    }else return null;
  }
}



module.exports = {BreadthfirstTraversal, Node};