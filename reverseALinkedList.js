//You are given the pointer to the head node of a linked list and you need to print all its elements in reverse order from tail to head, one element per line. The head pointer may be null meaning that the list is empty - in that case, do not print anything!
//You have to complete the void reversePrint(SinglyLinkedListNode* head) method which takes one argument - the head of the linked list. You should NOT read any input from stdin/console.

function reversePrint(head) {
    if (head.next !== null) {
        reversePrint(head.next);
      //.next will move on to next head
      //The next() method returns an object with two properties done and value
    }
    console.log(head.data);
}