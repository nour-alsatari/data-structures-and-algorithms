# Stacks and Queues
A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

Queue is First In First Out and Last In Last Out


## Challenge
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue


## Approach & Efficiency
the Big O space and time for Stack push(), pop(), peek(), and isEmpty() is O(1) operation. This is because it takes the same amount of time no matter how many Nodes (n) you have in the stack.

the Big O space and time for Queue enqueue(), dequeue(), peek(), and isEmpty() is O(1) operation in time and space because it does not matter how many other items live in the queue (n); it takes the same amount of time to perform the operation.

## API
Stack methods:

push
Arguments: value
adds a new node with that value to the top of the stack with an O(1) Time performance.

pop
Arguments: none
Returns: the value from node from the top of the stack
Removes the node from the top of the stack
Should raise exception when called on empty stack

peek
Arguments: none
Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack

is empty
Arguments: none
Returns: Boolean indicating whether or not the stack is empty.

Queue Methods

enqueue
Arguments: value
adds a new node with that value to the back of the queue with an O(1) Time performance.

dequeue
Arguments: none
Returns: the value from node from the front of the queue
Removes the node from the front of the queue
Should raise exception when called on empty queue

peek
Arguments: none
Returns: Value of the node located at the front of the queue
Should raise exception when called on empty stack

is empty
Arguments: none
Returns: Boolean indicating whether or not the queue is empty