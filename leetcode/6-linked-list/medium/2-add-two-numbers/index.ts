//  * Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const x = l1 !== null ? l1.val : 0; // if l1 is not null, set x to l1.val, else set x to 0
    const y = l2 !== null ? l2.val : 0; // if l2 is not null, set y to l2.val, else set y to 0
    const sum = carry + x + y; // sum of two nodes and carry

    carry = Math.floor(sum / 10); // set carry to sum / 10
    current.next = new ListNode(sum % 10); // set current.next to new node with sum % 10
    current = current.next; // move current to next node

    if (l1 !== null) l1 = l1.next; // move l1 to next node
    if (l2 !== null) l2 = l2.next; // move l2 to next node
  }

  if (carry > 0) {
    // if carry is greater than 0
    current.next = new ListNode(carry); // set current.next to new node with carry
  }

  return dummy.next;
}

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   let sum = 0; // sum of two nodes
//   let carry = 0; // carry over - 1 or 0
//   let head = new ListNode(); // dummy node
//   let current = head; // current node

//   // loop through both lists simultaneously until both lists are null and sum is 0
//   while (l1 || l2 || sum > 0) {
//     // check if l1 or l2 is null
//     if (l1) {
//       sum += l1.val; // add l1 value to sum
//       l1 = l1.next; // move l1 to next node
//     }

//     if (l2) {
//       sum += l2.val; // add l2 value to sum
//       l2 = l2.next; // move l2 to next node
//     }

//     // check if sum is greater than 10
//     if (sum >= 10) {
//       carry = 1; // set carry to 1
//       sum -= 10; // subtract 10 from sum
//     }

//     current.next = new ListNode(sum); // create new node with sum

//     current = current.next; // move current to next node

//     sum = carry; // set sum to carry because we already added it to current node
//     carry = 0; // reset carry to 0
//   }

//   return head.next; // return head.next because head is dummy node we created to keep track of the list
// }
