//create an array 
var rightPocket = [];

//add by index
rightPocket[0] = 'fantasia';

rightPocket[1] = 'savage materia';

//figure out length
rightPocket.length;

//Works as a stack LIFO(Last In First Out)
rightPocket.push('chewing gum');
console.log('You get the ' + rightPocket.pop())
//=> You get the chewing gum

//can also work as a queue(FIFO)
leftPocket.push('cheese sandwich')
console.log(
  'You pay the cheese sandwich with ' +
    leftPocket.shift() +
    '. That was a pricy sandwich...'
)
// => You pay the cheese sandwich with 10 gold coins.
//    That was a pricy sandwich...

//unshift: inserts items in the beginning of array 
leftPocket.unshift('red materia');
console.log('You aexamine the ' + leftPocket[0] + ' in wonder');
// => you examine the red materia in wonder


leatherBag = [];
leatherBag.push('dried meat', 'white feather');
leatherBag.unshift('red materia', 'savage materia');
//=> ['red materia', 'savage materia', 'dried meat', 'white feather']

//another remove method: splice
var firstItem = leatherBag.splice(/* start */ 0, /* numberOfItemsToRemove */ 1)
console.log('extracted first item => ' + firstItem)
// => extracted first item => red materia 

// you can use negative indexes to start from the end of the array
var lastItem = leatherBag.splice(-1, 1)
console.log('extracted last item => ' + lastItem)
// => extracted last item => white feather

var someRandomItemsInTheMiddle = leatherBag.splice(1, 2)
console.log('extracted items in the middle => ' + someRandomItemsInTheMiddle)
// => extracted items in the middle => dried meat

//splice can even insert items
rightPocket.splice(1, 0 'fish', 'jerky');
//^^splice(startIndex, numberOfItemsToRemove, item1, item2, etc...)
// => fantasia, fish, jerky, savage materia

//...or remove items and insert items at once 
let candle = rightPocket.splice(1, 1, 'secret message', 'wax')
//> ['fantasia', 'secret message', 'wax', 'fish', 'jerky', 'savage materia']