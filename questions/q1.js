/* Question 1 
You are a network designer entrusted with the responsibility of designing a computer network for a small office. 
The office consists of multiple rooms, and your goal is to connect them using the least amount of cable, ensuring that each room is connected to the network. 
You need to analyze the office layout, identify the rooms, and plan the most efficient way to connect them with cables. 
The objective is to minimize the required cable length while ensuring every room is connected to the network.
Your task is to apply Prim's graph-based algorithm, which starts with an initial room and progressively adds neighboring rooms with the shortest cable connections. 
By iteratively expanding the network, you will create a minimum-cost spanning tree that connects all the rooms in the office. Take on the role of the network designer, employ Prim's algorithm, and determine the minimum cost of connecting all the rooms in the office using the provided scenario.
Sample Input:- new Edge(0, 1, 4), new Edge(0, 7, 8), new Edge(1, 2, 8), new Edge(1, 7, 11), new Edge(2, 3, 7), new Edge(2, 8, 2), new Edge(2, 5, 4), new Edge(3, 4, 9), new Edge(3, 5, 14), new Edge(4, 5, 10), new Edge(5, 6, 2), new Edge(6, 7, 1), new Edge(6, 8, 6), new Edge(7, 8, 7) in the format of (edge pairs, weights) with a total number of 9 vertices.
Sample Output: Minimum cost to connect all rooms: 37
*/

class Edge {
    constructor(src, dest, weight) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}

function minimumCostSpanningTree(edges, numVertices) {
    const mst = [];
    const included = new Array(numVertices).fill(false);
    included[0] = true;
    let totalCost = 0;

    while (mst.length < numVertices - 1) {
        let minWeight = Infinity;
        let minEdge = null;

        for (const edge of edges) {
            if (included[edge.src] !== included[edge.dest] && edge.weight < minWeight) {
                minWeight = edge.weight;
                minEdge = edge;
            }
        }

        mst.push(minEdge);
        totalCost += minEdge.weight;
        included[minEdge.dest] = true;
    }

    return totalCost;
}

// Sample input
const edges = [
    new Edge(0, 1, 4), new Edge(0, 7, 8), new Edge(1, 2, 8), new Edge(1, 7, 11),
    new Edge(2, 3, 7), new Edge(2, 8, 2), new Edge(2, 5, 4), new Edge(3, 4, 9),
    new Edge(3, 5, 14), new Edge(4, 5, 10), new Edge(5, 6, 2), new Edge(6, 7, 1),
    new Edge(6, 8, 6), new Edge(7, 8, 7)
];
const numVertices = 9;

// Calculate minimum cost spanning tree
const minimumCost = minimumCostSpanningTree(edges, numVertices);

// Output the result
console.log("Minimum cost to connect all rooms:", minimumCost);
