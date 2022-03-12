# Singly Linked List
In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list. this is an Implementation of singly linked list

## Challenge
Linked List Implementation with node class and linked list class 

## Approach & Efficiency

insert method: The  Big O is O(1) time and space because it takes the same amount of time to add a new node to the beginning of the list, and no additional resources are being used

includes method: The Big O of time for Includes would be O(n). This is because, at its worse case, the node we are looking for will be the very last node in the linked list.

The Big O of space for Includes would be O(1). This is because there is no additional space being used than what is already given to us with the linked list input.

to string method: The Big O of time for toString would be O(n). This is because we will need to traverse until the last node in the linkedlist ti be printed and space is O(1)


## API
insert method:
Arguments: value
Returns: nothing
Adds a new node with that value to the head of the list with an O(1) Time performance.
<br/>
includes method:
Arguments: value
Returns: Boolean
Indicates whether that value exists as a Node’s value somewhere within the list.
<br/>
to string method:
Arguments: none
Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"