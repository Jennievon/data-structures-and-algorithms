//  * Definition for singly-linked list.
export class ListNode {
  val: number | string;
  next: ListNode | null;
  constructor(val?: number | string, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// definition for graph node
export class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

// definition for tree node
export class TreeNode {
  val: number | string;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number | string,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
