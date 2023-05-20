//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

// Explanation
// Floyd's Tortoise and Hare Algorithm
// The idea is to have two pointers, one moving at twice the speed of the other.
// If there is a cycle, the two pointers will eventually meet.
// If there is no cycle, the faster pointer will reach the end of the list.
