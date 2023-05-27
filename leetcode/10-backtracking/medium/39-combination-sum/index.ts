function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  // we use a backtracking algorithm to find all possible combinations by passing in a combination array, a start index, and a target
  backtrack([], 0, target);
  return result;

  // we iterate through the candidates array and for each element, we add it to the combination array and recursively call backtrack
  function backtrack(combination: number[], start: number, remain: number) {
    // if the remain is less than 0, we return
    if (remain < 0) {
      return;
      // if the remain is 0, we add the combination to the result array
    } else if (remain === 0) {
      result.push([...combination]);
      // if the remain is greater than 0, we iterate through the candidates array
    } else {
      for (let i = start; i < candidates.length; i++) {
        // we add the current element to the combination array and recursively call backtrack
        combination.push(candidates[i]);
        backtrack(combination, i, remain - candidates[i]);
        // we remove the current element from the combination array
        combination.pop();
      }
    }
  }
}
