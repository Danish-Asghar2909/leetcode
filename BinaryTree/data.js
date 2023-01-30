class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log("data : ", a);

//      a
//     / \
//    b   c
//   / \   \
//  d   e    f

// iterative
const depthFirstTraversal = (root) => {
  if (!root) return [];
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    // console.log(current.val)
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

const output = depthFirstTraversal(a);
console.log("Output iterative : ", output);

//recursive
const depthFirstTraversalRecursive = (root) => {
  if (!root) return [];
  const leftValues = depthFirstTraversalRecursive(root.left);
  const rightValues = depthFirstTraversalRecursive(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

const output2 = depthFirstTraversalRecursive(a);
console.log("Output recursive : ", output2);

//--------------------------------------------------------------------------------

//Breadth First Search
//iterative

const breadthFirstSearch = (root) => {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
};

const output3 = breadthFirstSearch(a);
console.log("Output Breadth First Search : ", output3);
//----------------------------------------------------------------------

//Has includes
//depth first approach
const hasIncludes = (root, target) => {
  if (!root) return false;
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === target) return true;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return false;
};

const output4 = hasIncludes(a, "e");
console.log("Output has includes : ", output4);

//recursive approach
const hasIncludesRecursive = (root , target) => {
    if(!root) return false
    if(root.val === target) return true
    return hasIncludesRecursive(root.left , target) || hasIncludesRecursive(root.right , target)
}

const output5 = hasIncludesRecursive(a, 'f')
console.log("Output has includes : ", output5)
//---------------------------------------------------------------------------------------------------