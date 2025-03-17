// 14. Implement a function to find the subarray with the maximum sum (Kadane’s Algorithm).

function maxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  let start = 0,
    end = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxSum + arr[i]) {
      maxSum = arr[i];
      start = i;
    } else {
      maxSum += arr[i];
    }

    if (maxSum > currentSum) {
      currentSum = maxSum;
      end = i;
    }
  }

  return { currentSum, subarray: arr.slice(start, end + 1) };
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));
