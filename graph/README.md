# Graphs
A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.


## Challenge
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods: add node,add edge, get nodes, get neighbors, size

## Approach & Efficiency
addNode and addEdge have a time and space complexity of O(1) because we are accessing it directly and not using any extra space. getNodes and getNeigbors have a time of O(1) and space of O(n) because we are looping through all of them to get them but not using any extra space. size is O(1) because not using any extra space.

## API
add node
Arguments: value
Returns: The added node
Add a node to the graph<br/>
add edge
Arguments: 2 nodes to be connected by the edge, weight (optional)
Returns: nothing
Adds a new edge between two nodes in the graph
If specified, assign a weight to the edge
Both nodes should already be in the Graph<br/>
get nodes
Arguments: none
Returns all of the nodes in the graph as a collection (set, list, or similar)<br/>
get neighbors
Arguments: node
Returns a collection of edges connected to the given node
Include the weight of the connection in the returned collection<br/>
size
Arguments: none
Returns the total number of nodes in the graph
