"use strict";
const Graph = require("../graph");
const Vertex = require("../vertex");
const Edge = require("../edge");



const myGraph = new Graph();
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addEdge(zero, two, 5);
myGraph.addEdge(one, three, 5);
myGraph.addEdge(two, three, 5);
myGraph.addEdge(two, four, 5);
myGraph.addEdge(four, five, 5);
myGraph.addEdge(five, three, 5);

describe("graph", () => {
  it("Node can be successfully added to the graph", () => {
    expect(myGraph.adjacenctList.has(zero)).toEqual(true);
  });

  it("An edge can be successfully added to the graph", () => {
    expect(...myGraph.getNeighbors(zero)).toEqual(new Edge(new Vertex(2), 5));
  });

  it("A collection of all nodes can be properly retrieved from the graph", () => {
    let graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    let x = [...graph.getNodes()];
    expect(x).toEqual(["A", "B", "C"]);
  });

  it("All appropriate neighbors can be retrieved from the graph", () => {
    let x = [...myGraph.getNeighbors(zero)];
    expect(x.length).toEqual(1);
  });

  it("Neighbors are returned with the weight between nodes included", () => {
    let x = [...myGraph.getNeighbors(zero)];
    expect(x.length).toEqual(1);
  });

  it("The proper size is returned, representing the number of nodes in the graph", () => {
    // let x = myGraph.size;
    expect(myGraph.size()).toEqual(6);
  });

  it("A graph with only one node and edge can be properly returned", () => {
    const myGraph2 = new Graph();
    const a = new Vertex('a');
    myGraph2.addVertex(a);


    let x = [...myGraph2.adjacenctList.keys()]
    expect(x).toEqual([...myGraph2.adjacenctList.keys()]);
  });

  it("An empty graph properly returns null", () => {
    const myGraph3 = new Graph();
    


    expect(myGraph3.getNodes()).toBeNull();
  });



});

describe("graph", () => {



  it("breadth first travesal returns the correct length for travesaled nodes", () => {
    expect(myGraph.breadthFirst(zero).size).toEqual(5);
  });

  it("breadth first returns the visited nodes", () => {
    const first = [...myGraph.breadthFirst(zero)][0];
    console.log(first);

    expect(first).toEqual(new Vertex(0));
  });



});