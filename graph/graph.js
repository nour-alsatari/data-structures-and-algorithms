"use strict";

const Vertex = require("./vertex");
const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacenctList = new Map();
  }

  addVertex(vertex) {
    this.adjacenctList.set(vertex, []);
  }

  addEdge(start, end, weight) {
    if (!this.adjacenctList.has(start) || !this.adjacenctList.has(end)) {
      console.log("one or both vertex is not existed");
      return;
    }

    const adjacencies = this.getNeighbors(start);
    adjacencies.push(new Edge(end, weight));

    // const adjacencies2 = this.getNeighbors(end);
    // adjacencies2.push(new Edge(start,weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacenctList.has(vertex)) {
      console.log("node does not exist");
      return;
    }
    return this.adjacenctList.get(vertex);
  }

  getNodes() {
    if (this.adjacenctList.size == 0) return null;
    return this.adjacenctList.keys();
  }

  size() {
    return this.adjacenctList.size;
  }
}

module.exports = Graph;
