what is a data structure?
a data structure is a way of organizin the data so it can be used efficiently.

insertion: add new data item in given collection of data items
deletion: delete an existing data item from collection of data items
traversal: access each data item exactly once so that it can be processed
searching: find out the location of the data item if it exists in the given collection of data items 
sorting: arranging data items. either in ascending/descending order 

what is stacked and how can it be used?
Stack is a linear data structure which the order LIFO(Last In First Out) or FILO(First In Last Out) for accessing elements.
Basic operations: push,pop,peek

*Creating array literals
const avengers = [‘Captain America’, ‘Iron Man’, ‘Thor’, ‘Hulk’];

*Remove value from array 
delete avengers[3];

*Destructuring arrays: refers to take values out of the arrays and presenting as individual values, this allows us to assign multiple values at the same time


const [x,y] = [1,2];

Queue Data Structure
FIFO data structure. We can only remove items from the queue one at a time, and must remove items in the same sequence as they were placed in the queue.

function createQueue() {
  //add or enqueue
  return {
    enqueue(item) {
      queue.unshift(item)
    },
     
    //remove or dequeue
    dequeue(){
      return queue.pop()
    },
    
    //peek
    peek(){
      return queue[queue.length -1]
    },
    
    //length
    get length() {
      return queue.length
      //not just queue.length because that will give us the length we started with which is 0
    },
    
    //isEmpty
    isEmpty() { 
    return queue.length === 0
    }
    
    //now we make a plan 
    
    const q = createQueue();
    q.enqueue('Make a lesson')
    q.enqueue('Help others learn')
    q.enqueue('Be Happy')
    
    q.dequeue
    //will take out first item which is Make a Lesson
    
    q.dequeue
    //will take out second
    
    q.dequeue
    //takes out Be Happy
  }




  return{}
}