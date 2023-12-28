/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */

// Recursive solution
function getHeight(tree: HTMLElement | null): number {
  if (!tree) {
    return 0;
  }

  // base case
  if (tree.children.length === 0) {
    return 1;
  }

  // recursive case
  let height = 0;
  const children = tree.children;
  for (let i = 0; i < children.length; i++) {
    height = Math.max(height, getHeight(children[i] as HTMLElement));
  }
  return height + 1;
}

// time complexity: O(n) because we have to visit every node
// space complexity: O(n) because we have to store every node in the call stack

// Iterative solution - BFS
function getHeightIterative(tree: HTMLElement | null): number {
  if (!tree) {
    return 0;
  }

  let height = 0;
  // use bfs to traverse the tree and keep track of the height
  const bfsqueue = [tree];

  // while the queue is not empty
  while (bfsqueue.length) {
    // get the size of the current level
    const currentLevel = bfsqueue.length;

    for (let i = 0; i < currentLevel; i++) {
      // remove the first element from the queue and add its children to the queue
      const node = bfsqueue.shift() as HTMLElement;
      // add the children to the queue
      for (let j = 0; j < node.children.length; j++) {
        bfsqueue.push(node.children[j] as HTMLElement);
      }
    }

    // increment the height after each level is processed
    height++;
  }

  return height;
}

// time complexity: O(n) because we have to visit every node
// space complexity: O(n) because we have to store every node in the queue

// Iterative solution - DFS
function getHeightIterativeDFS(tree: HTMLElement | null): number {
  if (!tree) {
    return 0;
  }

  let height = 0;
  // use dfs to traverse the tree and keep track of the height
  // use a stack to keep track of the nodes
  // the stack will contain the node and its level
  const dfsstack = [[tree, 1]];

  // while the stack is not empty
  while (dfsstack.length) {
    // remove the first element from the stack and add its children to the stack
    const [node, level] = dfsstack.pop() as [HTMLElement, number];
    height = Math.max(height, level);

    // add the children to the stack
    for (let j = 0; j < node.children.length; j++) {
      dfsstack.push([node.children[j] as HTMLElement, level + 1]);
    }
  }

  return height;
}

// Recursive solution
// Recursion is a technique that involves breaking a problem down into smaller
// subproblems until you get to a base case. The base case is the simplest
// possible case that you can solve. Once you solve the base case, you can
// combine the solutions to the subproblems to solve the original problem.
// In this case, the base case is when the tree has no children. The solution
// to the base case is 1. The solution to the original problem is the max height
// of the children + 1.

// This solution is not as efficient as the iterative solution because it has to
// traverse the tree multiple times

// Explanation of the solution:
// 1. If the tree is empty, return 0
// 2. If the tree has no children, return 1
// 3. If the tree has children, recursively call the function on each child
// 4. Return the max height of the children + 1

// Iterative solution - BFS
// BFS is a technique that involves traversing a tree level by level. You can
// use a queue to keep track of the nodes that you need to visit.
// In this case, you can use a queue to keep track of the nodes that you need to
// visit. You can use a variable to keep track of the height of the tree.
// You can use a variable to keep track of the current level.

// This solution is more efficient than the recursive solution because it only
// has to traverse the tree once
// Explanation of the solution:
// 1. If the tree is empty, return 0
// 2. Initialize a queue with the root node
// 3. While the queue is not empty, increment the height and remove the first
//    element from the queue
// 4. Add the children of the removed element to the queue
// 5. Return the height

// Iterative solution - DFS
// DFS is a technique that involves traversing a tree from the root to the
// leaves. You can use a stack to keep track of the nodes that you need to visit.
// In this case, you can use a stack to keep track of the nodes that you need to
// visit. You can use a variable to keep track of the height of the tree.
// You can use a variable to keep track of the current level.

// This solution is more efficient than the recursive solution because it only
// has to traverse the tree once
// Explanation of the solution:
// 1. If the tree is empty, return 0
// 2. Initialize a stack with the root node and its level
// 3. While the stack is not empty, remove the first element from the stack
// 4. Update the height to be the max of the current height and the level of the
//    removed element
// 5. Add the children of the removed element to the stack
// 6. Return the height
