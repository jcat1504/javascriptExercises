//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice

function twoSum(n, t) {
  for (let i = 0; i < n.length-1; i++)
  for (let j = i+1; j < n.length; j++)
  if (n[i] + n[j] === t) return [i, j];
}

