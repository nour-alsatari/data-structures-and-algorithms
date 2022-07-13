# Challenge Summary
Write the following method for the Graph class:
breadth first
Arguments: Node
Return: A collection of nodes in the order they were visited.
Display the collection

## Whiteboard Process
![whiteboard](../images/depth-first.jpg)

## Approach & Efficiency
Time Complexity: O(n) because we are keeping track of the last visited vertex in a stack, the stack could grow to the size of all vertices in the worst-case scenario. As a result, the complexity of time is O(n) and space is O(n) because of the recursive call

## Solution
npm test graph