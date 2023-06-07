//  * Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const temp = root.left; // Store the left child in a temp variable
  root.left = root.right; // Set the left child to the right child
  root.right = temp; // Set the right child to the temp variable

  // Recursively invert the left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// Time Complexity: O(N) where N is the number of nodes in the tree
// Space Complexity: O(N) where N is the number of nodes in the tree

// Tests
// const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
// const result = invertTree(root);

// root = [4,2,7,1,3,6,9]
// left = [2,1,3]
// right = [7,6,9]
// root.left = right
// root.right = left
// root = [4,7,2,9,6,3,1]
