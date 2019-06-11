//isUnique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique = (s) => {
  var chars = {};
  //storing value in hash table
  var dup = true;
  //true..there will be duplicates
  for (var i = 0; i < s.length; i++) {
    if ((s[i] in chars)) {
      //if there is a duplicate, return false
      return false;
    }
    chars[s[i]] = 1;
  }
  return dup;
}

console.log(isUnique("abc")); //true
console.log(isUnique("aabc"); //false