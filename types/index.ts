//  * Definition for singly-linked list.
export class ListNode {
  val: number | string;
  next: ListNode | null;
  constructor(val?: number | string, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
