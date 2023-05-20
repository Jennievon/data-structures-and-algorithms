//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let firstHalf: ListNode | null = head;
  let secondHalf: ListNode | null = reverseList(slow);

  while (secondHalf !== null) {
    if (firstHalf!.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }
  return true;
}

const reverseList = (head: ListNode | null): ListNode | null => {
  let reversedList: ListNode | null = null;
  let currentList: ListNode | null = head;
  while (currentList !== null) {
    let nextList: ListNode | null = currentList.next;
    currentList.next = reversedList;
    reversedList = currentList;
    currentList = nextList;
  }
  return reversedList;
};
