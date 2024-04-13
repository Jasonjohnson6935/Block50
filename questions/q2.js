/* Question 2 
You are an aspiring computer scientist tasked with creating a function that can find the shortest path between two locations in a graph. 
The graph represents various locations and the roads connecting them, with each road having a specific distance associated with it. 
Your goal is to create a function called bfsShortestPath (graph, source, target) that takes in the graph, the source node (representing the traveler's current location), and the target node (representing the traveler's destination). 
The function should return an array representing the shortest path from the source to the target.
The graph is represented using an adjacency list. This means that each location in the graph is a node, and the roads connecting them are represented as edges. 
The adjacency list stores the neighboring nodes for each node, allowing you to traverse the graph efficiently. Your task is to create a bfsShortestPath function, utilizing the Breadth-First Search (BFS) algorithm to find the shortest path from the source to the target. The function should return an array that represents the shortest path, starting from the source and ending at the target.
Sample Input: A: ['B', 'C'], B: ['A', 'D', 'E'], C: ['A', 'F'], D: ['B'], E: ['B', 'F'], F: ['C', 'E'], in the format of Vertices: (neighboring nodes) and source node will be A and Destination node will be F
Sample Output: Shortest path from A to F: [ 'A', 'C', 'F' ]
*/

function bfsShortestPath(graph, source, target) {
    const queue = [source];
    const visited = new Set([source]);
    const parent = {};

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === target) {
            break;
        }

        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
                parent[neighbor] = current;
            }
        }
    }

    const shortestPath = [];
    let node = target;
    while (node !== undefined) {
        shortestPath.unshift(node);
        node = parent[node];
    }

    return shortestPath;
}

// Sample input graph represented as an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

// Source and target nodes
const sourceNode = 'A';
const targetNode = 'F';

// Find the shortest path
const shortestPath = bfsShortestPath(graph, sourceNode, targetNode);

// Output the result
console.log("Shortest path from", sourceNode, "to", targetNode, ":", shortestPath);