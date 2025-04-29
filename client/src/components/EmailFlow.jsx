"use client";

import { useCallback, useState } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import AddSourcesBlock from "./Sources";

// node and edges
const initialEdges = [];

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    type: "input",
    data: { label: `${localStorage.getItem("node")}` },
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    type: "input",
    data: { label: "kamal" },
  },
];

export const EmailFlow = () => {
  const [sources, setSources] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, id: String(Date.now()) };
      setEdges((eds) => eds.concat(edge));
    },
    [setEdges]
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
        <button className="bg-blue-600 text-white py-2 px-3 rounded-md cursor-pointer">
          🚀 Save & Schedule | ▲
        </button>
      </div>

      <div className="h-dvh flex justify-center items-center flex-col">
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
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};
