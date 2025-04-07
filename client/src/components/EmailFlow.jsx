"use client";

import React, { useState, useCallback, useEffect } from "react";
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

  let id = 1;
  const getId = () => id++;
  // add new node
  useEffect(() => {
    const node = {
      id: getId(),
      type: "input",
      data: (
        <div className="flex items-center">
          <span className="px-2">➕</span>
          <div className="">
            <h5 className="font-bold text-[10px] text-start">Leads From</h5>
            <p className="text-[7px] text-wrap text-red-400 text-start">
              {localStorage.getItem("node")}
            </p>
          </div>
        </div>
      ),
      position: { x: 250, y: 5 },
    };
    setNodes((nds) => [...nds, node]);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center py-4 px-4 shadow-sm">
        <div className="">
          <h3 className="pl-2">Delete ✏️</h3>
          <p>Click on a block to configure and add it in sequence</p>
        </div>
        <button className="bg-blue-600 text-white py-2 px-3 rounded-md cursor-pointer">
          🚀 Save & Schedule | ▲
        </button>
      </div>

      <div className="w-dvw h-dvh flex justify-center items-center flex-col">
        <div
          className="flex justify-center items-center flex-col p-3 border rounded-md w-fit mt-5 z-50 cursor-pointer"
          onClick={handleSourcesOpen}
        >
          <span>+</span>
          <h3>Add Lead Source</h3>
          <p>Click to add leads from List or CRM</p>
        </div>

        {sources ? <AddSourcesBlock onClose={handleSourcesClose} /> : ""}

        {/* ReactFlow elements */}
        <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect} fitView>
          <MiniMap />
          <Background variant="" gap={12} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};
