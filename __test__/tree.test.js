
const {Node,BT,BST} = require('../lib/tree.js');

describe('Binary Tree',()=>{
  it('Can successfully instantiate an empty tree',()=>{
    let tree = null;
    let valueOne = new Node();
    tree = new BT(valueOne);
    console.log('tree',tree);
    expect(typeof(tree.root)).toEqual('object');
    expect(tree.root.value).toBeUndefined();
    expect(tree.root.leftChild).toBeNull();
    expect(tree.root.rightChild).toBeNull();
  });
  it('Can successfully instantiate a tree with a single root node',()=>{
    let tree = null;
    let valueOne = new Node(1);
    tree = new BT(valueOne);
    console.log('tree with one root',tree);
    expect(typeof(tree.root)).toEqual('object');
    expect(tree.root.value).toEqual(1);
    expect(tree.root.leftChild).toBeNull();
    expect(tree.root.rightChild).toBeNull();
  });
  it('Can successfully add a left child and right child to a single root node',()=>{
    let tree = null;
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    valueOne.leftChild = valueThree;
    valueOne.rightChild = valueTwo;
    tree = new BT(valueOne);
    console.log('tree with one root',tree);
    expect(typeof(tree.root)).toEqual('object');
    expect(tree.root.value).toEqual(1);
  });
});

describe('Binary Tree Methode',()=>{
  let tree = null;
  beforeEach(()=>{
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let valueFour = new Node(4);
    let valueFive = new Node(5);
    let valueSix = new Node(6);
    let valueSeven = new Node(7);

    valueOne.leftChild = valueThree;
    valueOne.rightChild = valueSix;
    valueThree.leftChild = valueFour;
    valueThree.rightChild = valueTwo;
    valueSix.leftChild = valueSeven;
    valueSix.rightChild = valueFive;
    tree = new BT(valueOne);
  });
  it ('Can successfully return a collection from a preorder traversal',()=>{
    console.log('preOrder()',tree.preOrder());
    //[ 1, 3, 4, 2, 6, 7, 5 ]
    expect(tree.preOrder()).toEqual([ 1, 3, 4, 2, 6, 7, 5 ]);
    expect(tree.preOrder().length).toEqual(7);
  });
  it ('Can successfully return a collection from an inorder traversal',()=>{
    console.log('inOrder()',tree.inOrder());
    //[ 4, 3, 2, 1, 7, 6, 5 ]
    expect(tree.inOrder()).toEqual([ 4, 3, 2, 1, 7, 6, 5 ]);
    expect(tree.inOrder().length).toEqual(7);
  });
  it ('Can successfully return a collection from a postorder traversal',()=>{
    console.log('postOrder()',tree.postOrder());
    // [ 4, 2, 3, 7, 5, 6, 1 ]
    expect(tree.postOrder()).toEqual([ 4, 2, 3, 7, 5, 6, 1 ]);
    expect(tree.postOrder().length).toEqual(7);
  });
});
describe('Binary Search Tree',()=>{
  it('Can successfully adds a value, that value in the correct location in the binary search tree',()=>{
    const tree = new BST(null);
    tree.add(4);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(5);
    tree.add(6);
    tree.add(7);
    console.log('************',tree.preOrder());
    expect(tree.preOrder()).toEqual([ 4, 1, 2, 3, 5, 6, 7 ]);
    expect(tree.preOrder().length).toEqual(7);
  });
  it('Can successfullyreturns a boolean indicating whether or not the value is in the tree at least once.',()=>{
    const tree = new BST(null);
    tree.add(4);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(5);
    tree.add(6);
    tree.add(7);
    console.log('************',tree.preOrder());
    expect(tree.contains(6)).toEqual(true);
    expect(tree.contains(1)).toEqual(true);
    expect(tree.contains(8)).toEqual(false);
  });
});