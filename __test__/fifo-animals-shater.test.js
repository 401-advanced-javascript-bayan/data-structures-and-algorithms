const Animal = require('../lib/fifo-animals-shater.js');

describe('Animal-shelter Module', ()=>{
  it('add an animal by using enqueue() ', ()=>{
    let animal = new Animal();
    animal.enqueue('fish');
    expect(animal.enqueue('fish')).toBeNull();
    
    expect(animal.enqueue('bird')).toBeNull();
  });
  it('add an animal by using enqueue() method', ()=>{
    let animal = new Animal();
    animal.enqueue('cat');
    animal.enqueue('cat');
    animal.enqueue('dog');
    animal.enqueue('bird');
    expect(animal.cat[0].name).toEqual('cat');
    expect(animal.cat[1].name).toEqual('cat');
    expect(animal.cat.length).toEqual(2);
    expect(animal.dog[0].name).toEqual('dog');
    expect(animal.dog.length).toEqual(1);
    expect(animal.enqueue('bird')).toBeNull();
  });
  it('delete an animal by using dequeue() method', ()=>{
    let animal = new Animal();
    animal.enqueue('cat');
    animal.enqueue('cat');
    animal.enqueue('dog');
    animal.enqueue('bird');
    expect(animal.cat[1].name).toEqual('cat');
    expect(animal.cat.length).toEqual(2);
    expect(animal.dog[0].name).toEqual('dog');
    expect(animal.dequeue('cat')[0].name).toEqual('cat');
    expect(animal.dequeue('cat').length).toEqual(0);
    expect(animal.dequeue('dog')).toStrictEqual([]);
    expect(animal.dequeue('bird')).toBeNull();
  });
}); 
////