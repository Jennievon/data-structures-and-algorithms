//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let reversedList: ListNode | null = null;
  let currentList: ListNode | null = head;
  while (currentList !== null) {
    let nextList: ListNode | null = currentList.next;
    currentList.next = reversedList;
    reversedList = currentList;
    currentList = nextList;
  }
  return reversedList;
}

// EXPLANATION
//  we use three pointers, reversedList, currentList, and nextList
//  reversedList is the reversed list
//  currentList is the current list
//  nextList is the next list
//  we iterate through the list
//  at each iteration, we set nextList to the next list
//  we set currentList.next to reversedList
//  we set reversedList to currentList
//  we set currentList to nextList
