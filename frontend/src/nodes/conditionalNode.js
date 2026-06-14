// conditionalNode.js

import { useState } from 'react';
import { useStore } from '../store';
import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition ?? 'value == true');
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleChange = (e) => {
    setCondition(e.target.value);
    updateNodeField(id, 'condition', e.target.value);
  };

  const handles = [
    { type: 'target', position: 'left', id: `${id}-input` },
    {
      type: 'source',
      position: 'right',
      id: `${id}-true`,
      style: { top: '33%' },
    },
    {
      type: 'source',
      position: 'right',
      id: `${id}-false`,
      style: { top: '66%' },
    },
  ];

  return (
    <BaseNode title="Condition" handles={handles}>
      <label className="base-node__field">
        <span>If</span>
        <input type="text" value={condition} onChange={handleChange} />
      </label>
      <div className="base-node__branch-labels">
        <span className="base-node__branch base-node__branch--true">True →</span>
        <span className="base-node__branch base-node__branch--false">False →</span>
      </div>
    </BaseNode>
  );
};
