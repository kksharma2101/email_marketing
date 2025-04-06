"use client";

import React, { useState, useCallback } from "react";
import ReactFlow, { addEdge, Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import AddSourcesBlock from "./Sources";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Sequence Start Point" },
    position: { x: 250, y: 5 },
  },
];

export const EmailFlow = () => {
  const [sources, setSources] = useState(false);
  const initialEdges = [];
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds))[setEdges]
  );
  // functions
  const handleSourcesOpen = () => {
    setSources(true);
  };

  const handleSourcesClose = () => {
    setSources(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center py-4 px-4 shadow-sm">
        <div className="">
          <h3 className="pl-2">Delete ✏️</h3>
          <p>Click on a block to configure and add it in sequence</p>
        </div>
        <div className="">
          <button className="bg-blue-600 text-white py-2 px-3 rounded-md">🚀 Save & Schedule | ▲</button>
        </div>
      </div>

      <div className="w-dvw h-dvh flex justify-center items-center flex-col">
        
        <div className="flex justify-center items-center flex-col p-3 border rounded-md relative top-5 -z-0" onClick={handleSourcesOpen}>
          <span>+</span>
          <h3>Add Lead Source</h3>
          <p>Click to add leads from List or CRM</p>
        </div>

        {sources ? <AddSourcesBlock onClose={handleSourcesClose} /> : ""}

        {/* ReactFlow elements */}
        <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
          <MiniMap />
          <Background variant="" gap={12} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};
