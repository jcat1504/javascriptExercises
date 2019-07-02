//Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
    return ar.reduce((c, i) => c + i, 0);
}

//reduce to single value array 
//c and i are two numbers 
//add c+i 
//the 0 is 