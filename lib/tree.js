/* eslint-disable indent */
'use strict';

class Node {
    constructor(value, left, right) {
      this.value = value;
      this.left = left || null;
      this.right = right || null;
    }
  }
  class BinaryTree {
    constructor(node) {
      this.root = node;
    }
  
    inOrder() {
      let results = [];  
        let _walk = node => {    
      
          if (node.left) _walk(node.left);
  
              results.push(node.value)
          
             if (node.right) _walk(node.right);
        };  
        _walk(this.root);
  
        return results;
    }
  
    preOrder() {
      let results = [];  
        let _walk = node => {
          results.push(node.value);
            if (node.left) _walk(node.left);                 
          if (node.right) _walk(node.right);
              };  
        _walk(this.root);  
        return results;
    }
  
    postOrder() {
      let results = [];
  
        let _walk = node => {
          if (node.left) _walk(node.left);
                   
          if (node.right) _walk(node.right);
  
            results.push(node.value);
        };
          _walk(this.root);
          return results;
    }
  }