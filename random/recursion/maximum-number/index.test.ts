/*
Code Analysis

Objective:
The objective of the function is to find the maximum number in an array of numbers using recursion.

Inputs:
- arr: an array of numbers

Flow:
- Check if the length of the array is 1, if yes, return the only element in the array
- Otherwise, compare the first element in the array with the maximum number in the rest of the array (using recursion)
- Return the maximum number between the first element and the maximum number in the rest of the array

Outputs:
- The maximum number in the array

Additional aspects:
- The function uses recursion to solve the problem
- The function uses the Math.max() method to compare numbers
- The function uses the slice() method to create a new array without the first element
*/

describe("maximumNumberWithRecursion_function", () => {
  // Tests that the function returns the maximum number in an array with positive numbers.
  it("test_positive_numbers", () => {
    expect(maximumNumberWithRecursion([1, 2, 3, 4, 5])).toBe(5);
    expect(maximumNumberWithRecursion([10, 20, 30, 40, 50])).toBe(50);
  });

  // Tests that the function returns the maximum number in an array with negative numbers.
  it("test_negative_numbers", () => {
    expect(maximumNumberWithRecursion([-1, -2, -3, -4, -5])).toBe(-1);
    expect(maximumNumberWithRecursion([-10, -20, -30, -40, -50])).toBe(-10);
  });

  // Tests that the function returns the only element in an array with one element.
  it("test_one_element", () => {
    expect(maximumNumberWithRecursion([5])).toBe(5);
  });

  // Tests that the function returns the maximum number in an array with two elements.
  it("test_two_elements", () => {
    expect(maximumNumberWithRecursion([10, 5])).toBe(10);
    expect(maximumNumberWithRecursion([-10, -5])).toBe(-5);
  });

  // Tests that the function returns the maximum number in an array with both positive and negative numbers.
  it("test_mixed_numbers", () => {
    expect(maximumNumberWithRecursion([1, -2, 3, -4, 5])).toBe(5);
    expect(maximumNumberWithRecursion([-10, 20, -30, 40, -50])).toBe(40);
  });

  // Tests that the function returns the same number in an array with all elements being the same number.
  it("test_all_same_numbers", () => {
    expect(maximumNumberWithRecursion([5, 5, 5, 5])).toBe(5);
    expect(maximumNumberWithRecursion([-10, -10, -10, -10])).toBe(-10);
  });
});

/*
Code Analysis

Objective:
The objective of the maximumNumber function is to receive an array of numbers and return the maximum value within that array.

Inputs:
- arr: an array of numbers

Flow:
- Initialize a variable called max with the first element of the array
- Loop through the array starting from the second element
- If the current element is greater than the max variable, update max to be the current element
- Return the max variable

Outputs:
- The maximum value within the input array

Additional aspects:
- The function assumes that the input array is not empty
- The function only works with arrays of numbers, not with other data types
- The function does not modify the input array, it only returns a value
*/

describe("maximumNumber_function", () => {
  // Tests that maximumNumber returns the correct maximum number in the array when given arr = [1, 2, 3, 4, 5].
  it("test_happy_path_1", () => {
    expect(maximumNumber([1, 2, 3, 4, 5])).toBe(5);
  });

  // Tests that maximumNumber returns the correct maximum number in the array when given arr = [10, 20, 30, 40, 50].
  it("test_happy_path_2", () => {
    expect(maximumNumber([10, 20, 30, 40, 50])).toBe(50);
  });

  // Tests that maximumNumber returns undefined when given an empty array.
  it("test_edge_case_1", () => {
    expect(maximumNumber([])).toBeUndefined();
  });

  // Tests that maximumNumber returns the correct maximum number in the array when given arr = [0].
  it("test_edge_case_2", () => {
    expect(maximumNumber([0])).toBe(0);
  });

  // Tests that maximumNumber returns the correct maximum number in the array when given arr = [100, 200, 300, 400, 500].
  it("test_happy_path_3", () => {
    expect(maximumNumber([100, 200, 300, 400, 500])).toBe(500);
  });

  // Tests that maximumNumber returns the correct maximum number in the array when given arr = [-1, -2, -3, -4, -5].
  it("test_edge_case_3", () => {
    expect(maximumNumber([-1, -2, -3, -4, -5])).toBe(-1);
  });
});
