import { NODE_TYPES } from "../components/Graph";

export function dfsStep(visited, stack, graph, setGraph, start, goal) {
    console.log("dfs step")
    console.log(visited)
    
    if (stack.length == 0) {
        return true;
    }

    // 1. Get next node off stack
    let current = stack.pop()
    visited.add(JSON.stringify(current))
    if (current.x == goal.x && current.y == goal.y) return true;

    let new_graph = [...graph]

    // 2. Add neighbors to stack
    if (current.x - 1 >= 0) {
        let next = {x: current.x - 1, y: current.y};
        if (!visited.has(JSON.stringify(next))) {
            stack.push(next);
            new_graph[next.y][next.x] = NODE_TYPES.VISITED;
        }
    } 
    if (current.x + 1 < graph[0].length) {
        let next = {x: current.x + 1, y: current.y}
        if (!visited.has(JSON.stringify(next))) {
            stack.push(next)
            new_graph[next.y][next.x] = NODE_TYPES.VISITED;
        }
    }
    if (current.y - 1 >= 0) {
        let next = {x: current.x, y: current.y - 1}
        if (!visited.has(JSON.stringify(next))) {
            stack.push(next)
            new_graph[next.y][next.x] = NODE_TYPES.VISITED;
        }
    }
    if (current.y + 1 < graph.length) {
        let next = {x: current.x, y:current.y + 1}
        if (!visited.has(JSON.stringify(next))) {
            stack.push(next)
            new_graph[next.y][next.x] = NODE_TYPES.VISITED;
        }
    }

    // 3. Update graph
    // if (current.x != start.x && current.y != start.y) {
    new_graph[current.y][current.x] = NODE_TYPES.PATH;
    new_graph[start.y][start.x] = NODE_TYPES.START;
    new_graph[goal.y][goal.x] = NODE_TYPES.GOAL;
        // console.log("good")
    // }
    setGraph(new_graph);

    return false // function returns whether DFS is done or not
}