//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  // creating two pointers to keep track of the head (store the head of the merged list) and the
  // current node (traverse and build the merged list from the head)
  let head: ListNode | null = null;
  let current: ListNode | null = null;

  while (list1 && list2) {
    // we check which node is smaller and assign it to smallerNode
    // we also move the respective list pointer to the next node
    let smallerNode: ListNode | null = null;
    if (list1.val < list2.val) {
      smallerNode = list1;
      list1 = list1.next;
    } else {
      smallerNode = list2;
      list2 = list2.next;
    }

    // we assign the smallerNode to head if head is null
    // else we assign the smallerNode to current.next
    if (!head) {
      head = smallerNode;
      current = smallerNode;
    } else {
      current!.next = smallerNode;
      current = current!.next;
    }
  }

  // we assign the remaining list to the current.next
  current!.next = list1 ? list1 : list2;
  return head;
}
