/* eslint-disable indent */

class Node {
    constructor(value,leftChild = null,rightChild = null){
      this.value = value;
      this.rightChild = rightChild;
      this.leftChild = leftChild;
    }
  }
  class BT {
    constructor(root = null){
      this.root = root;
    }
    //read the data=>go left=>go right
    preOrder(){
      let data = [];
      let _read = (node)=>{
        data.push(node.value);
        if(node.leftChild) _read(node.leftChild);
        if(node.rightChild) _read(node.rightChild);
      };
      _read(this.root);
      return data;
    }
    //go left=>read the data=>go right
    inOrder(){
      let data = [];
      let _read = (node)=>{
        if(node.leftChild) _read(node.leftChild);
        data.push(node.value);
        if(node.rightChild) _read(node.rightChild);
      };
      _read(this.root);
      return data;
    }
    //go left=>go right=>read the data
    postOrder(){
      let data = [];
      let _read = (node)=>{
        if(node.leftChild) _read(node.leftChild);
        if(node.rightChild) _read(node.rightChild);
        data.push(node.value);
      };
      _read(this.root);
      return data;
    }
  }
  class BST extends BT{
  
    add(value){
      if(this.root === null){return this.root = new Node(value);}
      this._insert(value,this.root);
    }
    _insert(value,upperNode){
      if(value > upperNode.value){
        if(upperNode.rightChild === null){
          return  upperNode.rightChild = new Node(value);
        }else{
          return this._insert(value,upperNode.rightChild);
        }
      }
      if(value <= upperNode.value){
        if(upperNode.leftChild === null){
          return  upperNode.leftChild = new Node(value);
        }else{
          return this._insert(value,upperNode.leftChild);
        }
      }
    }
  
  
    contains(value){
      return this._search(value,this.root);
    }
    _search(value,upperNode){
      if(upperNode === null){return false; }
      if(upperNode.value === value){
        return true;
      }else if(upperNode.value < value){
        return this._search(value,upperNode.rightChild);
      }else if(upperNode.value >= value){
        return this._search(value,upperNode.leftChild);
      }
    }
  }
  
  
  module.exports = {Node,BT,BST};