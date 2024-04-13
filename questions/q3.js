/* Question 3 
You are a cab driver in Boston, and you receive a request to pick up a passenger from a specific location. 
Your task is to find all possible routes to reach the passenger's location using the Depth First Search (DFS) algorithm in JavaScript. 
You need to implement the Depth First Search algorithm to find all possible routes from your current location (the starting node) to the passenger's location (the target node). 
Your goal is to provide a list of all possible routes. Implement the dfsAllRoutes(graph, source, target) function in JavaScript that takes the graph, the source node (your current location), and the target node (the passenger's location) as input. 
The function should return an array of all possible routes from the source to the target.
Sample Input: A: ["B", "C"], B: ["A", "D", "E"], C: ["A", "F"], D: ["B"], E: ["B", "F"], F: ["C", "E"], in the format of Vertices: (neighboring nodes) and source node will be A and Destination node will be F.
Sample Output: All possible routes from A to F: [ [ 'A', 'B', 'E', 'F' ], [ 'A', 'C', 'F' ] ]
*/

function dfsAllRoutes(graph, source, target) {
    const visited = new Set();
    const routes = [];

    function dfs(node, path) {
        if (node === target) {
            routes.push([...path, node]);
            return;
        }
        visited.add(node);
        path.push(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, path.slice());
            }
        }

        visited.delete(node);
    }

    dfs(source, []);
    return routes;
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

// Find all possible routes
const allRoutes = dfsAllRoutes(graph, sourceNode, targetNode);

// Output the result
console.log("All possible routes from", sourceNode, "to", targetNode + ":", allRoutes);