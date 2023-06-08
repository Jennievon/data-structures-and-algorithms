import { ListNode } from "../../types";

export function countNumberOfItemsWithRecursion(node: ListNode | null): number {
  if (node === null) {
    return 0;
  }
  if (node.next === null) {
    return 1;
  }
  return 1 + countNumberOfItemsWithRecursion(node.next);
}
