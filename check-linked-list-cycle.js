var hasCycle = function(linkedList){
  //create a slow node pointer and a fast node pointer
  let tortoise = linkedList;
  let hare = linkedList;
  //while the two pointers exist and the fast pointer has a next value
  
  while(hare && hare.next) {
    //move the slow pointer by one node and the fast pointer by two nodes
    tortoise = tortoise.next;
    hare = hare.next;
    //if at any time the slow pointer and the fast pointer are equal, the linked list contains a cycle
    if (tortoise === hare) { return: true }
  }
  //return false if a cycle is never found
  return false;
}