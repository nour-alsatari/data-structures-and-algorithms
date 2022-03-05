# Singly Linked List
In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list. this is an Implementation of singly linked list

## Challenge
Linked List Implementation with node class and linked list class 

## Approach & Efficiency
 the Big O space/time for this approach is Θ(n)	

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