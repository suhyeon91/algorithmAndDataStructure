class DirectedGraph{
    constructor(){
        this.edges = {};
    }

    addVertex(vertex){
        this.edges[vertex] = {};
    }
    
    addEdge(orgVertex, desVertex, weight){
        weight = weight || 0;
        this.edges[orgVertex][desVertex] = weight;
    }

    removeEdge(orgVertex, desVertex){
        if(this.edges[orgVertex] && this.edges[orgVertex][desVertex]){
            delete this.edges[orgVertex][desVertex];
        }
    }

    removeVertex(vertex){
        for(let ajVertex in this.edges[vertex]){
            this.removeEdge(ajVertex, vertex);
        }
        delete this.edges[vertex];
    }

    traverseBFS(vertex, fn){
        let queue = [], visited = {};

        queue.push(vertex);

        while(queue.length){
            vertex = queue.shift();
            if(!visited[vertex]){
                visited[vertex] = true;
                fn(vertex);
                for(let adjacentVertex in this.edges[vertex]){
                    queue.push(adjacentVertex);
                }
            }
        }
    }

    traverseDFS(vertex, fn){
        let visited = {};
        this._traverseDFS(vertex, visited, fn);
    }

   _traverseDFS(vertex, visited, fn){
       visited[vertex] = true;
       fn(vertex);
       for(let adjacentVertex in this.edges[vertex]){
           if(!visited[adjacentVertex]){
               this._traverseDFS(adjacentVertex, visited, fn);
           }
       }
   }

   _isEmpty(obj){
        return Object.keys(obj).length === 0;
   }

   Dijkstra(source){
        //정접 집합 Q생성
        let Q = {}, dist = {};
        for(let vertex in this.edges){
            //모르는 거리는 무한으로 설정
            dist[vertex] = Infinity;
            //V를 Q에 추가
            Q[vertex] = this.edges[vertex];
        }

        //출발점에서 출발점까지의 거리를 0으로 설정
        dist[source] = 0;

        while(!this._isEmpty(Q)){
            let u = this._extractMin(Q, dist);

            //Q로부터 u제거
            delete Q[u];

            //V가 여전히 Q에 있는 한 u는 각 이웃 V에 대해 다음을 수행한다.
            for(let neighbor in this.edges[u]){
                //현재거리
                let alt = dist[u] + this.edges[u][neighbor];
                //더 짧은 거리 발견
                if(alt < dist[neighbor]){
                    dist[neighbor] = alt;
                }
            }
        }
        return dist;
   }

   _extractMin(Q, dist){
       let minimumDist = Infinity;
       let nodeWithMinimumDist = null;

       for(let node in Q){
            if(dist[node] <= minimumDist){
                minimumDist = dist[node];
                nodeWithMinimumDist = node;
            }
       }
       return nodeWithMinimumDist;
l   }

    topologicalSortUtil(v, visited, stack){
        visited.add(v);

        for(let item in this.edges[v]){
            if(!visited.has(item)){
                this.topologicalSortUtil(item, visited, stack);
            }
        }
        stack.unshift(v);
    }

    topologicalSort(){
        let visited = new Set(), stack = [];

        for(let item in this.edges){
            if(!visited.has(item)){
                this.topologicalSortUtil(item, visited, stack);
            }
        }
        return stack;
    }
}


let digraph = new DirectedGraph();
digraph.addVertex('A');
digraph.addVertex('B');
digraph.addVertex('C');
digraph.addEdge('A', 'B', 1);
digraph.addEdge('B', 'C', 2);
digraph.addEdge('C', 'A', 3);

digraph.traverseBFS("B", (vertex) => {console.log(vertex)});


let digraph1 = new DirectedGraph();
digraph1.addVertex('A');
digraph1.addVertex('B');
digraph1.addVertex('C');
digraph1.addVertex('D');
digraph1.addEdge('A', 'B', 1);
digraph1.addEdge('B', 'C', 1);
digraph1.addEdge('C', 'A', 1);
digraph1.addEdge('A', 'D', 1);

console.log(digraph1);

digraph1.Dijkstra("A");