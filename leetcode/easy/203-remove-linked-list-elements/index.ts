//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // Handle the case of an empty list
  if (!head) {
    return null;
  }

  // Skip any leading nodes with the target value
  while (head && head.val === val) {
    head = head.next;
  }

  let newNode = head;

  while (newNode && newNode.next) {
    if (newNode.next.val === val) {
      // Skip the next node by adjusting the new node's next pointer
      newNode.next = newNode.next.next;
    } else {
      // Move to the next node
      newNode = newNode.next;
    }
  }

  return head;
}
