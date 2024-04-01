export function checkCycleDependency(
  nodes: number,
  dependencies: number[][],
): boolean {
  const graph = buildGraph(nodes, dependencies);

  const visited = Array(nodes).fill(false);
  const path = Array(nodes).fill(false);
  let cycle = false;

  for (let i = 0; i < nodes; i++) {
    cycle = traverse(graph, visited, path, i, cycle);
  }

  return cycle;
}

function buildGraph(nodes: number, edges: number[][]): number[][] {
  const graph: number[][] = Array(nodes)
    .fill(0)
    .map(() => []);

  for (const edge of edges) {
    graph[edge[1]].push(edge[0]);
  }

  return graph;
}

function traverse(
  graph: number[][],
  visited: boolean[],
  path: boolean[],
  node: number,
  cycle: boolean,
) {
  if (path[node]) {
    return true;
  }

  if (visited[node] || cycle) {
    return cycle;
  }

  visited[node] = true;
  path[node] = true;

  for (const next of graph[node]) {
    cycle = traverse(graph, visited, path, next, cycle);
  }

  path[node] = false;
  return cycle;
}
