export function topologicalSorting(nodes, dependencies) {
    const sorting = [];
    const graph = buildGraph(nodes, dependencies);
    const visited = Array(nodes).fill(false);
    const path = Array(nodes).fill(false);
    let cycle = false;
    for (let i = 0; i < nodes; i++) {
        cycle = traverse(graph, visited, path, i, cycle, sorting);
    }
    if (cycle) {
        throw new Error('Cycle Dependency.');
    }
    return sorting.reverse();
}
export function checkCycleDependency(nodes, dependencies) {
    const graph = buildGraph(nodes, dependencies);
    const visited = Array(nodes).fill(false);
    const path = Array(nodes).fill(false);
    let cycle = false;
    for (let i = 0; i < nodes; i++) {
        cycle = traverse(graph, visited, path, i, cycle);
    }
    return cycle;
}
function buildGraph(nodes, edges) {
    const graph = Array(nodes)
        .fill(0)
        .map(() => []);
    for (const edge of edges) {
        graph[edge[1]].push(edge[0]);
    }
    return graph;
}
function traverse(graph, visited, path, node, cycle, sorting) {
    if (path[node]) {
        return true;
    }
    if (visited[node] || cycle) {
        return cycle;
    }
    visited[node] = true;
    path[node] = true;
    for (const next of graph[node]) {
        cycle = traverse(graph, visited, path, next, cycle, sorting);
    }
    path[node] = false;
    sorting?.push(node);
    return cycle;
}
