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
  const h = new Node(5)

  a.left = b
  a.right = c

  b.left = d
  b.right = f

  c.left = g
  c.right = e
  e.left = h

  var maxDepth = function(root) {
    if(!root) return 0
    return Math.max(maxDepth(root.left) , maxDepth(root.right) ) + 1
  };


  const output = maxDepth(a)
  console.log("Output : ", output)