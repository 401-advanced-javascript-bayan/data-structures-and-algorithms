/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
'use strict';

class Stack{
  constructor(){
    this.node = new Array();
    this.top = null;
  }
  push(value){
    this.node.push(value);
    this.top = value;
  }
  pop(){
    let value = this.node.pop();
    this.top = !this.node.length ? null : this.node[this.node.length - 1];
    return value;
  }
  peek(){
    return this.top;
  }
  isEmpty(){
    return this.top === 0;
  }
}
class   Queue {
  constructor(){
    this.node = [];
    this.length = 0;
  }
  enqueue(value){
    this.length++;
    return this.node.unshift(value);
  }
  dequeue(){
    this.length && this.length--;
    return this.node.pop() || null;
  }
  peek(){
    return this.node[this.node.length - 1];
  }
  isEmpty(){
    return this.node[this.node.length - 1] === 0;
  }
}
module.exports = {Stack,Queue};