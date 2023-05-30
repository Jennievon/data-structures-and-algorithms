function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // area = min height * width
    // we take the minimum of the two heights to ensure that the container's height is determined by the shorter line
    // ensures that we are accurately calculating the maximum amount of water that can be stored within the container formed by the two lines
    const area = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, area);

    // move the pointer that points to the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
