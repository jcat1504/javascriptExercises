//find smallest and largest value in array
//first, sort the array and then return the first two and last two elements
//Using slice() prevents the array itself from being sorted:

var numbers = [2, 4, 9, 2, 0, 16, 24];

var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0],                      
    secondSmallest = sorted[1],                
    secondLargest = sorted[sorted.length - 2], 
    largest  = sorted[sorted.length - 1];

console.log('Smallest: ' + smallest);
console.log('Second Smallest: ' + secondSmallest);
console.log('Second Largest: ' + secondLargest);
console.log('Largest: ' + largest);

//You can use the spread operator to pass each array element as an argument to Math.min() or Math.max().

//Using this method, you can find the smallest and largest number in an array:

const numbers = [2, 4, 9, 2, 0, 16, 24];

const smallest_number = Math.min(...numbers);
const largest_number = Math.max(...numbers);

console.log('Smallest Value:', smallest_number); // Smallest Value: 0
console.log('Largest Value:', largest_number);   // Largest Value: 24