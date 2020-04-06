// Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

// remove from the end

var removeNthFromEnd = function(head, n) {
  var list = [],
    currentNode = head;

  while (currentNode.next !== null) {
    list.push(currentNode);
    currentNode = currentNode.next;
  }
  list.push(currentNode);

  // Now we have to deal with 3 cases about the initial position of the node-to-be-removed.

  /* Case-1 >> When the node-to-be-removed is somewhere in between the last and first nodes of the linked-list.
 A) The link of the node before the removed node is redirected to point to the node the removed node is pointing to.
  B) But now the total length of the list has been reduced by one after removal of the n-th node, so the The new n-th node from the end will be (list.length - n + 1 - 1 )-th node from the beginning of the Linked List i.e. (list.length -n )-th node.
  C) And the node previous to the removed node will be ((list.length -n + 1) - 1 - 1)-th node, i.e. (list.length - n - 1)-th node.
  D) So, now, I have to link the node before the removed node to be redirected to point to the node after the removed node, which will be (list.length -n + 1)-th node.
  D) So I do, list[list.length - n - 1].next = list[list.length -n + 1]
So, to remove the current element from the list, all we have to do is link previous.next with current.next . This way, the current element will be lost in the computer memory and will be available to be cleaned by the garbage collector.
  */

  if (list.length - n - 1 >= 0 && list.length - n + 1 < list.length) {
    list[list.length - n - 1].next = list[list.length - n + 1];
    return list[0];
  }

  /* Case-2 >> If the node-to-be-removed was the first node of the Linked-list. 
That is, after removal the position of the previous-node to the removed-node will be negative.
In this case, if the node-removed was the only node of the linked list then for the head of the list, return an empty array if list.length is <=1. ELSE,
If the length is more than one, then return the index 1 element for the head. */
  if (list.length - n - 1 < 0) {
    return list.length <= 1 ? [] : list[1];
  }

  /* Case - 3 >> If the node-to-be-removed was the last node of the Linked-list. 
That is, after removal the previous node becomes the last node of the Linked-list, then just point its next-node to null.*/

  if (list.length - n + 1 >= list.length) {
    list[list.length - n - 1].next = null;
    return list[0];
  }
};

let removeKth = (ll, value) => {};
