/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
const {Stack, Queue} = require('../lib/stack-and-queues.js');
describe('Stack Class',()=>{
  it ('Can successfully push onto a stack',()=>{
    let stack = new Stack();
    stack.push('item1');
    expect(stack.peek()).toEqual('item1');
  });
  it('Can successfully push multiple values onto a stack',()=>{
    let stack = new Stack();
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');
    expect(stack.peek()).toEqual('item3');
  });
  it('Can successfully pop off the stack',()=>{
    let stack = new Stack();
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');
    let value = stack.pop();
    expect(value).toEqual('item3');

  });
  it('Can successfully empty a stack after multiple pops',()=>{
    let stack = new Stack();
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });
  it('Can successfully peek the next item on the stack',()=>{
    let stack = new Stack();
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');
    expect(stack.peek()).toEqual('item3');
  });
  it('Can successfully instantiate an empty stack',()=>{
    let stack = new Stack();
    expect(stack.peek()).toBeNull();

  });

});
describe('Queue Class',()=>{

  it ('Can successfully enqueue into a queue',()=>{
    let queue = new Queue();
    queue.enqueue('- item1');
    expect(queue.peek()).toEqual('- item1');
  });
  it('Can successfully enqueue multiple values into a queue',()=>{
    let queue = new Queue();
    queue.enqueue('- item1');
    queue.enqueue('- item2');
    queue.enqueue('- item3');
    expect(queue.peek()).toEqual('- item1');
  });
  it('Can successfully dequeue out of a queue the expected value',()=>{
    let queue = new Queue();
    queue.enqueue('- item1');
    queue.dequeue();
    expect(queue.node[queue.node - 1]).toBe(undefined);
  });
  it('Can successfully peek into a queue, seeing the expected value',()=>{
    let queue = new Queue();
    queue.enqueue('- item1');
    queue.enqueue('- item2');
    queue.enqueue('- item3');
    expect(queue.peek()).toEqual('- item1');
  });
  it('Can successfully empty a queue after multiple dequeues',()=>{
    let queue = new Queue();
    queue.enqueue('- item1');
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(false);
  });
  it('Can successfully instantiate an empty queue',()=>{
    let queue = new Queue();

    expect(queue.isEmpty()).toEqual(false);
  });
});