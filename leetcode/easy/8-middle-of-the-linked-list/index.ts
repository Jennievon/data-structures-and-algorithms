//  * Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function middleNode(head: ListNode | null): ListNode | null {
//   let length: number = 0;
//   let current: ListNode | null = head;
//   while (current !== null) {
//     length++;
//     current = current.next;
//   }
//   let middle: number = Math.floor(length / 2);
//   current = head;
//   for (let i = 0; i < middle; i++) {
//     if (current !== null) {
//       current = current.next;
//     }
//   }
//   return current;
// }

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}

// EXPLANATION
//  to find the middle node, we use two pointers, slow and fast
//  slow moves one node at a time, fast moves two nodes at a time
//  when fast reaches the end of the list, slow will be at the middle
//  this is because fast moves twice as fast as slow
//  so when fast reaches the end, slow will be at the middle
//  if the list has an even number of nodes, slow will be at the first of the two middle nodes
//  if the list has an odd number of nodes, slow will be at the middle node
//  this is because fast moves twice as fast as slow
