import { countNumberOfItemsWithRecursion } from ".";
import { ListNode } from "../../types";

/*
Code Analysis

Objective:
The objective of the function is to recursively count the number of items in a linked list, represented by a ListNode object.

Inputs:
The function takes in a single input parameter, which is a ListNode object representing the head of the linked list.

Flow:
The function first checks if the input node is null, in which case it returns 0. If the input node's next property is null, it means that the current node is the last node in the linked list, so the function returns 1. Otherwise, the function recursively calls itself with the next node in the linked list and adds 1 to the result.

Outputs:
The main output of the function is a number representing the total number of items in the linked list.

Additional aspects:
- The function uses recursion to traverse the linked list and count the number of items.
- The function assumes that the input linked list is valid, i.e., it does not contain any cycles or loops.
*/

describe("countNumberOfItemsWithRecursion_function", () => {
  // Tests the function with a list containing only one node.
  it("test_one_node_list", () => {
    const node = new ListNode(1);
    expect(countNumberOfItemsWithRecursion(node)).toBe(1);
  });

  // Tests the function with a list containing multiple nodes.
  it("test_multiple_node_list", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    expect(countNumberOfItemsWithRecursion(node1)).toBe(3);
  });

  // Tests the function with a list containing a very large number of nodes.
  it("test_large_list", () => {
    let node = new ListNode(1);
    for (let i = 2; i <= 100000; i++) {
      node = new ListNode(i, node);
    }
    expect(countNumberOfItemsWithRecursion(node)).toBe(100000);
  });

  // Tests the function with a ListNode containing non-numeric values.
  it("test_non_numeric_values", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode("two");
    const node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    expect(countNumberOfItemsWithRecursion(node1)).toBe(3);
  });

  // Tests the function with a circular linked list.
  it("test_circular_list", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    node3.next = node1;
    expect(() => countNumberOfItemsWithRecursion(node1)).toThrow();
  });

  // Tests the function with an empty list.
  it("test_empty_list", () => {
    expect(countNumberOfItemsWithRecursion(null)).toBe(0);
  });
});
