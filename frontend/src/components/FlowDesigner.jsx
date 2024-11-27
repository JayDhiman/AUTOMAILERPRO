import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 250, y: 0 },
  },
];

const initialEdges = [];

const FlowDesigner = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const addNode = useCallback(() => {
    const id = (nodes.length + 1).toString();
    const newNode = {
      id,
      data: { label: `Node ${id}` },
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [nodes, setNodes]);

  return (
    <div className="h-screen flex">
      <div className="w-1/5 p-4 bg-gray-200">
        <button
          onClick={addNode}
          className="w-full mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Add Node
        </button>
      </div>
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowDesigner;
