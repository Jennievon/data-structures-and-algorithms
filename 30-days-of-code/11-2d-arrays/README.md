## Context
Given a `6 x 6` 2D Array, `A`:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in `A` to be a subset of values with indices falling in this pattern in `A`'s graphical representation:

a b c
  d
e f g
There are 16 hourglasses in `A`, and an hourglass sum is the sum of an hourglass' values.

## Task
Calculate the hourglass sum for every hourglass in 7, then print the maximum hourglass sum.

### Example

In the array shown above, the maximum hourglass sum is  for the hourglass in the top left corner.

### Input Format

There are  lines of input, where each line contains 6 space-separated integers that describe the 2D Array `A`.

### Constraints
- `-9 <= A[i][j] <= 9`
- `0 <= i,j <= 5`

### Output Format

Print the maximum hourglass sum in `A`.