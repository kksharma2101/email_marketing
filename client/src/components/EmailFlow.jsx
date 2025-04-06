'use client'

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
  const handleSources = () => {
    if (sources) {
      setSources(true);
    }
  };

  return (
    <div>
      <div className="emailflow-nav">
        <div className="box-1">
          <h3 className="">Delete ✏️</h3>
          <p>Click on a block to configure and add it in sequence</p>
        </div>
        <div className="box-2">
          <button>🚀 Save & Schedule | ▲</button>
        </div>
      </div>
      <div className="emailflow-main">
        <div className="inside-container" onClick={handleSources}>
          <span>+</span>
          <h3>Add Lead Source</h3>
          <p>Click to add leads from List or CRM</p>
        </div>

        {!sources && <AddSourcesBlock/>}

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
