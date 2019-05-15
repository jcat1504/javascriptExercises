//PalindromePermutation: given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forward and backward. A permutation is a rearrangement of letters. the palindrome does not need to be limited to just dictionary words 

var canPermutePalindrome = function(s) {
    var hash = {};
  //storing value in hash table
    for(var i = 0; i < s.length; i++){
      //iterating thru each letter in string
        if(!hash[s[i]])hash[s[i]] = 1;
      //if both hashes aren't the same in value, don't return?
        else hash[s[i]]++;
      //otherwise return hash value
    }
    var count = 0;
    for(j in hash){
        if(hash[j]%2 !== 0 )count++;
      //if even, return
        if(count > 1)return false
      //if not palindrome, return false
    }
    return true
};