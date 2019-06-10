//FizzBuzz - Write a program that prints the numbers from 1 to 100. But for
//multiples of three print “Fizz” instead of the number and for the multiples
//of five print “Buzz”. For numbers which are multiples of both three and five
//print “FizzBuzz”.

var string = [];
for(startNum = 1; endNum <=100; startNum ++){
  if (startNum % 3 === 0 && startNum % 5 === 0){
    string += ("FizzBuzz");
  }
  else if (startNum % 3 === 0){
    string += ("Fizz");
  }
  else if (startNum % 5 === 0){
    string += ("Buzz");
  }
  else {
    string += " ";
  }
}

console.log(string);
