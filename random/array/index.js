function ArrayChallenge(strArr) {
  const tree = {}; // This tree is to store the parent and child node relationships

  // For each string in the array, we set the child to the parent
  for (let i = 0; i < strArr.length; i++) {
    const [child, parent] = strArr[i].match(/\d+/g);

    // If the parent node is already in the tree, we add the child node to the parent node's array
    if (tree[parent]) {
      tree[parent].push(child);
    } else {
      // If the parent node is not in the tree, we create a new array with the child node as the first element
      tree[parent] = [child];
    }
  }

  // We loop through the tree to check if the parent node has more than 2 children
  for (const node in tree) {
    if (tree[node].length > 2) {
      return false;
    }
  }

  // If the tree passes the test, we return true
  return true;
}
// console.log(ArrayChallenge(readline()));

//   // Test cases
// console.log(ArrayChallenge(["(1,2)", "(2,4)", "(7,2)"])); // Output: true
// console.log(ArrayChallenge(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // Output: true
// console.log(ArrayChallenge(["(1,2)", "(3,2)", "(2,12)", "(5,2)"])); // Output: false
console.log(ArrayChallenge(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // Output: true
