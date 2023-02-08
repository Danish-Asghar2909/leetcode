class Node {
    constructor(val, left, right) {
      this.val = val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }
  
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(2);
  const d = new Node(3);
  const e = new Node(3);
  const f = new Node(4);
  const g = new Node(null)

  a.left = b
  a.right = c

  b.left = d
  b.right = f

  c.left = g
  c.right = e

var isSymmetric = function(root) {
    console.log("Root : ", root)
    if(!root) return true
    return traverse(root.left , root.right)
};

var traverse = function(left , right){
    if(!left && !right) return true
    if(!left || !right) return false
    if(left.val !== right.val) return false

    return traverse(left.left , right.right) && traverse(right.left , left.right)
} 

const output = isSymmetric(a)
console.log("Output : ", output)