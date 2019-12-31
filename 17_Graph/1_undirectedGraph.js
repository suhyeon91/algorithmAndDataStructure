class UndirectedGraph{
    constructor(){
        this.edges = {};
    }

    addVertex(vertex){
        this.edges[vertex] = {};
    }

    addEdge(vertex1, vertex2, weight){
        weight = weight || 0;
        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    }

    removeVertex(vertex){
        for(let ajVertex in this.edges[vertex]){
            this.removeEdge(ajVertex, vertex);
        }

        delete this.edges[vertex];
    }

    removeEdge(vertex1, vertex2){
        if(this.edges[vertex1] && this.edges[vertex1][vertex2]){
            delete this.edges[vertex1][vertex2];
        }
        
        if(this.edges[vertex2] && this.edges[vertex2][vertex1]){
            delete this.edges[vertex2][vertex1];
        }
    }

    
}

let graph = new UndirectedGraph();
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2, 1);
graph.edges;

graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(2, 3, 8);
graph.addEdge(3, 4, 10);
graph.addEdge(4, 5, 100);
graph.addEdge(1, 5, 88);
graph.edges;

let graph2 = new UndirectedGraph();
graph2.addVertex(1);
graph2.addVertex(2);
graph.addEdge(1, 2, 1);
graph2.edges;

graph2.addVertex(3);
graph2.addVertex(4);
graph2.addVertex(5);
graph2.addEdge(2, 3, 8);
graph2.addEdge(3, 4, 10);
graph2.addEdge(4, 5, 100);
graph2.addEdge(1, 5, 88);
graph2.edges;

graph2.removeEdge(4, 5);
graph2.edges;

graph2.removeVertex(1);
graph2.edges;