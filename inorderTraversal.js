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
    if(!root) return []
    return [...inorderTraversal(root.left) , root.val , ...inorderTraversal(root.right)]    
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