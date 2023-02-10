
 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }

var sortedArrayToBST = function(nums) {
    return convertToBST(nums , 0 , nums.length - 1)
};

// Create a function which will convert any particular range of given nums array...
// & return its corresponding BST root node....
var convertToBST = function(nums, beg, end) {
    // If beg > end, return NULL, as we receive a wrong range...
	if (beg > end)
		return null;
    // set the middle node...
	var mid = Math.ceil((beg + end) / 2);
    // Initialise root node with value same as nums[mid]...
	var root = new TreeNode(nums[mid]);
    // Assign left subtrees as the same function called on left subranges...
	root.left = convertToBST(nums, beg, mid - 1);
    // Assign right subtrees as the same function called on right subranges...
	root.right = convertToBST(nums, mid + 1, end);
    // Return the root node...
	return root;
};

const input = [-10,-3,0,5,9]
const output = sortedArrayToBST(input)
console.log("Ouput : ", output.val , output.left.val)