from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from collections import deque

class Edge(BaseModel):
    source: str
    target: str

class Node(BaseModel):
    id: str

class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:

    node_ids = {node.id for node in nodes}

    adj: dict[str, list[str]] = {nid: [] for nid in node_ids}
    in_degree: dict[str, int] = {nid: 0 for nid in node_ids}

    for edge in edges:
        adj[edge.source].append(edge.target)
        in_degree[edge.target] += 1

    # Kahn's algorithm:
    queue = deque(nid for nid, deg in in_degree.items() if deg == 0)
    processed = 0

    while queue:
        current = queue.popleft()
        processed += 1
        for neighbour in adj[current]:
            in_degree[neighbour] -= 1
            if in_degree[neighbour] == 0:
                queue.append(neighbour)

    return processed == len(node_ids)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: PipelineRequest):
    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(pipeline.nodes, pipeline.edges),
    }
