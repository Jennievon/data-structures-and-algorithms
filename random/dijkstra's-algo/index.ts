// Dijkstra's Algorithm

import { GraphNode } from "../../types";

export function shortestPathToFinish(graph: GraphNode) {
  const distances = new Map<GraphNode, number>();
  const visited = new Set<GraphNode>();
  const queue = [graph];
  distances.set(graph, 0);

  while (queue.length) {
    const node = queue.shift()!;
    visited.add(node);

    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }

      const distance = distances.get(node)! + 1;
      if (!distances.has(neighbor) || distance < distances.get(neighbor)!) {
        distances.set(neighbor, distance);
      }
    }
  }

  return distances;
}

// steps
// 1. create a map to store the distances from the start node to each node
// 2. create a set to store the visited nodes
// 3. create a queue to store the nodes to visit
// 4. set the distance of the start node to 0
// 5. while the queue is not empty
// 6. dequeue the first node
// 7. add the node to the visited set
// 8. for each neighbor of the node
// 9. if the neighbor has not been visited
// 10. enqueue the neighbor
// 11. calculate the distance from the start node to the neighbor
// 12. if the neighbor has not been visited or the distance is less than the distance in the map
// 13. set the distance in the map to the calculated distance
// 14. return the distances map

// Tests
const graph = new GraphNode(0);
const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);
const node5 = new GraphNode(5);
const node6 = new GraphNode(6);
const node7 = new GraphNode(7);
const node8 = new GraphNode(8);
const node9 = new GraphNode(9);
const node10 = new GraphNode(10);
const node11 = new GraphNode(11);
const node12 = new GraphNode(12);
const node13 = new GraphNode(13);
const node14 = new GraphNode(14);

graph.neighbors = [node1, node2, node3];
node1.neighbors = [node4, node5];
node2.neighbors = [node6, node7];
node3.neighbors = [node8, node9];
node4.neighbors = [node10, node11];
node5.neighbors = [node12, node13];
node6.neighbors = [node14];

const result = shortestPathToFinish(graph);
console.log(result);

// Shortest path from 0 to 14 is 3
