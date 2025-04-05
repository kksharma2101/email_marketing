import React, { useState, useCallback } from "react";
import ReactFlow, { addEdge, Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 250, y: 5 },
  },
];
export const EmailFlow = () => {
  const initialEdges = [];
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds))[setEdges]
  );
  return (
    <div>
      <div style={{ width: "100vw", height: "90vh" }}>
        <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
      );
    </div>
  );
};
