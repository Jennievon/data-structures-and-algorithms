function climbStairs(n: number): number {
  let memo = {};
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 3;

  function climbStairsRecursively(n: number) {
    if (memo.hasOwnProperty(n)) return memo[n];

    memo[n] = climbStairsRecursively(n - 1) + climbStairsRecursively(n - 2);
    return memo[n];
  }

  return climbStairsRecursively(n);
}
