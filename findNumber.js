Given an unsorted array of n elements, find if the element k is present in the given array or not. return 'YES' or 'NO'

function findNumber(arr, k) {
  let result = 'NO';
  arr.forEach(item => {
    if(k === item) {
      return result = 'YES';
    }
  })
    return result;
}
