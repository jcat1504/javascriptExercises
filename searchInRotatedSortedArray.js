//Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

//(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

//You are given a target value to search. If found in the array return its index, otherwise return -1.

//You may assume no duplicate exists in the array.

var search = function(nums, target) {
    var result = -1;
    
    var pivot = false;
    var previous = null;
    
    for (var i=0; i < nums.length; i++) {
        if (previous > nums[i] && !pivot) {
            pivot = true;
        }
        
        if (nums[i] === target) {
            result = i;
            break;
        }
        else if (pivot && nums[i] > target) {
            break;
        }
        
        previous = nums[i];
    }
    
    return result;
};