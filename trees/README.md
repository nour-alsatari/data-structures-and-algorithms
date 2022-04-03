# Trees
tree data structure has roots, branches, and leaves connected with one another. A tree is non-linear and a hierarchical data structure consisting of a collection of nodes such that each node of the tree stores a value, a list of references to nodes (the “children”)

## Challenge
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a Binary Tree class and implement the depth search traversal 
Create Binary Search Tree class that has add and contain methods

## Approach & Efficiency
for preorder, inorder and postorder:
Time Complexity: O(n) because we are keeping track of the last visited vertex in a stack, the stack could grow to the size of all vertices in the worst-case scenario. As a result, the complexity of time is O(n)
Auxiliary Space: If we don’t consider size of stack for function calls then O(1) otherwise O(n).

Add and Contains time complexity and space is O(n) because the worst-case time complexity of search and insert operations is O(h) where h is the height of the Binary Search Tree


## API
pre order -> to traverse a tree from root, left, right
in order -> to traverse a tree from left, root, right
post order -> -> to traverse a tree from left, right, root
Add -> Adds a new node with that value in the correct location in the binary search tree.
Contains -> Returns: boolean indicating whether or not the value is in the tree at least once.
