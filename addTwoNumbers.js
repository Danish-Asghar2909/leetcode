/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;
    console.log("dummy head : ", dummyHead)
    console.log("curr : ", curr)
    console.log("carry : ", carry)
    while (l1 || l2 || carry) {
      let l1Val = l1 ? l1.val : 0;
      console.log("L1val : ", l1Val)
      let l2Val = l2 ? l2.val : 0;
      console.log("L1Val : ", l2Val)
      let columnSum = l1Val + l2Val + carry;
      console.log("columnSum : ", columnSum)
      carry = Math.floor(columnSum / 10);
      console.log("Carry : ", carry)
      let newNode = new ListNode(columnSum % 10);
      curr.next = newNode;
      curr = newNode;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
      console.log("new node : ", newNode)
      console.log("l1 :", l1)
      console.log("l2 : ", l2)
    }
    return dummyHead.next;
  }

  const l1 = {val : 2, next : { val : 4, next : { val : 3 , next : null} }}

  const l2 = {val : 5, next : { val : 6, next : { val : 4 , next : null} }}

  const output = addTwoNumbers(l1 , l2)
  console.log("Output : ", output)