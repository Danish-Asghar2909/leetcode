/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    console.log(root)
    const current = root
    const stack = []
    
};

const inputTree = {
    val : 1 ,
    left : null,
    right : {
        val : 2 ,
        left : {
            val : 3,
            left : null,
            right : null
        },
        right : null
    }
}

const output = inorderTraversal(inputTree)
console.log("output : ", output)