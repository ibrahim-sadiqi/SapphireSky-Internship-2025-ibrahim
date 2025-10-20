/* Bucket Sort is a distribution-based sorting algorithm that divides the input elements into several groups called buckets.
  Each bucket is then sorted individually (often using another algorithm like Insertion Sort),
and finally, the contents of all buckets are combined to form the sorted array. 
   */

const insertionSort = (bucket) => {
  for (let i = 1; i < bucket.length; i++) {
    const key = bucket[i];
    let j = i - 1;
    while (j >= 0 && bucket[j] > key) {
      bucket[j + 1] = bucket[j];
      j--;
    }
    bucket[j + 1] = key;
  }
};

const bucketSort = (arr) => {
  const n = arr.length;
  const buckets = Array.from({ length: n }, () => []);
  for (let i = 0; i < arr.length; i++) {
    const b = Math.floor(n * arr[i]);
    buckets[b].push(arr[i]);
  }

  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
  }

  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }
};

let arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
bucketSort(arr);
console.log(arr);
