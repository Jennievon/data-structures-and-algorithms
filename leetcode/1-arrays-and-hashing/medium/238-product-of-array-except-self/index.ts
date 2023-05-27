function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  // The answer array to be returned
  const answer: number[] = [];

  // Calculate the prefix products i.e. the product of all elements to the left of the element
  const prefixProducts: number[] = [];
  // we don't have any elements to the left of the first element, so the first element's prefix product is 1
  prefixProducts[0] = 1;
  // loop through the array and calculate the prefix products
  for (let i = 1; i < n; i++) {
    // the prefix product of the current element is the product of the previous element and the previous element's prefix product
    prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1];
  }

  // Calculate the suffix products i.e. the product of all elements to the right of the element
  let suffixProduct = 1;
  // loop through the array backwards and calculate the suffix products
  for (let i = n - 1; i >= 0; i--) {
    // the answer array is updated with the product of the prefix product and the suffix product
    answer[i] = prefixProducts[i] * suffixProduct;
    // update the suffix product
    suffixProduct *= nums[i];
  }

  return answer;
}

// explanation:
// we iterate through the array and calculate the prefix products and store them in an array
// prefix products means the product of all elements to the left of the current element
// we then iterate through the array backwards and calculate the suffix products and store them in a variable
// suffix products means the product of all elements to the right of the current element
// we then update the answer array with the product of the prefix product and the suffix product
