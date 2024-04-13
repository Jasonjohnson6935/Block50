/* Question 4 

Imagine you are developing a navigation system for a delivery robot that needs to navigate through a city to deliver packages efficiently. 
The city is represented as a graph, where each point is a location, and the edges between points represent the routes that the robot can take. 
Each edge has a weight associated with it, representing the distance or time required to travel from one point to another. 
The goal is to use Dijkstra's algorithm in JavaScript to calculate the shortest path for the robot, optimizing package delivery.
In this scenario, the graph representing the city is as follows:
Point A connects to Point B with a weight of 5.
Point A connects to Point C with a weight of 2.
Point B connects to Point D with a weight of 4.
Point B connects to Point E with a weight of 2.
Point C connects to Point B with a weight of 8.
Point C connects to Point E with a weight of 7.
Point D connects to Point E with a weight of 6.
Point D connects to Point F with a weight of 3.
Point E connects to Point F with a weight of 1.
Sample Input: A: { B: 5, C: 2 }, B: { D: 4, E: 2 }, C: { B: 8, E: 7 }, D: { E: 6, F: 3 }, E: { F: 1 }, F: {}, const startNode = "A"; const endNode = "F";
Sample Output: Shortest path: A -> B -> E -> F and Distance: 8
*/

function dijkstra(graph, startNode, endNode) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();

    for (const node in graph) {
        distances[node] = node === startNode ? 0 : Infinity;
        previous[node] = null;
        pq.enqueue(node, distances[node]);
    }

    while (!pq.isEmpty()) {
        const currentNode = pq.dequeue().element;
        if (currentNode === endNode) break;

        if (!graph[currentNode]) continue;

        for (const neighbor in graph[currentNode]) {
            const distance = distances[currentNode] + graph[currentNode][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentNode;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    const shortestPath = [];
    let node = endNode;
    while (node) {
        shortestPath.unshift(node);
        node = previous[node];
    }

    return { path: shortestPath, distance: distances[endNode] };
}

// Priority queue implementation
class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.sort();
    }

    dequeue() {
        return this.elements.shift();
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    sort() {
        this.elements.sort((a, b) => a.priority - b.priority);
    }
}

// Sample input graph represented as an adjacency list
const graph = {
    'A': { 'B': 5, 'C': 2 },
    'B': { 'D': 4, 'E': 2 },
    'C': { 'B': 8, 'E': 7 },
    'D': { 'E': 6, 'F': 3 },
    'E': { 'F': 1 },
    'F': {}
};

// Start and end nodes
const startNode = "A";
const endNode = "F";

// Calculate the shortest path and distance
const result = dijkstra(graph, startNode, endNode);

// Output the result
console.log("Shortest path:", result.path.join(" -> "));
console.log("Distance:", result.distance);