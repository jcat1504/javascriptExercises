//Given a linked list, determine if it has a cycle in it.

//To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.


function hasCycle(head) {
  var slow, fast;

  if(!head || !head.next) return false;

    slow = head;
    fast = head;

    if(head.next === head) return true;

    while(fast.next.next) {

      slow = slow.next;
      fast = fast.next.next;

      if(slow === fast) return true;
    }

  return false;
}