'use strict';
const PQueue = require('../lib/queue-with-tacks.js');
describe('PQueue Class',()=>{
  it ('Can successfully enqueue into a queue',()=>{
    let queue = new PQueue();
    queue.enqueue('test value1');
    expect(queue.firstStack).toEqual(['test value1']);
  });
  it('Can successfully enqueue multiple values into a queue',()=>{
    let queue = new PQueue();
    queue.enqueue('test value1');
    queue.enqueue('test value2');
    queue.enqueue('test value3');
    expect(queue.firstStack).toEqual(['test value1','test value2','test value3']);
  });
  it ('Can successfully dequeue value',()=>{
    let queue = new PQueue();
    queue.enqueue('test value1');
    queue.enqueue('test value2');
    queue.enqueue('test value3');
    queue.dequeue();
    expect(queue.firstStack).toEqual(['test value2','test value3']);
  });
  it('Can successfully dequeue multiple values ',()=>{
    let queue = new PQueue();
    queue.enqueue('test value1');
    queue.enqueue('test value2');
    queue.enqueue('test value3');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.firstStack).toEqual([]);
  });
});