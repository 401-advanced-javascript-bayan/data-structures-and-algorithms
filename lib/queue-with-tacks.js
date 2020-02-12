'use strict';

class PQueue {
    constructor(){
      this.firstStack = [];
      this.secondStack = [];
      this.top = null;
  
    }
    enqueue(value){
      this.firstStack.push(value);
      this.top = value;
  
    }
    dequeue(){
      if (this.secondStack.length === 0){
        if(this.firstStack.length === 0){
          return 'there is no value in the queue';
        }}
      while(this.firstStack.length > 0){
        let value = this.firstStack.pop();
        this.secondStack.push(value);
      }
  
      const data = this.secondStack.pop();
      while(this.secondStack.length > 0){
        let value = this.secondStack.pop();
        this.firstStack.push(value);
      }
      return data;
    }
  }
  module.exports = PQueue;