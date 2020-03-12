'use strict';

const collectNodes = (node, obj) => {
  if (!node.value) {
    return;
  }
  obj[node.value] ? obj[node.value]++ :  obj[node.value] = 1;

  if (node.left)  collectNodes(node.left, obj);
  if (node.right)  collectNodes(node.right, obj);
};

const returnMatches = (node, obj, arr) => {
  if (!node.value) {
    return;
  }

  if (obj[node.value]) arr.push(node.value);

  if (node.left)  returnMatches(node.left, obj, arr);
  if (node.right)  returnMatches(node.right, obj, arr);
};



const treeIntersection = (node1, node2) => {
  if (!node1 || !node2 || node1.constructor.name !== 'Node' || node2.constructor.name !== 'Node') {
    return false;
  }
  const savedNodes = {};
  const matches = [];

  collectNodes(node1, savedNodes);
  returnMatches(node2, savedNodes, matches);

  return matches;
};

module.exports = treeIntersection;