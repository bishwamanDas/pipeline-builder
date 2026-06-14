// transformNode.js

import { useState } from 'react';
import { useStore } from '../store';
import { BaseNode } from './BaseNode';

const OPERATIONS = [
  'Uppercase',
  'Lowercase',
  'Trim',
  'Reverse',
  'Base64 Encode',
];

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'Uppercase');
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleChange = (e) => {
    setOperation(e.target.value);
    updateNodeField(id, 'operation', e.target.value);
  };

  const handles = [
    { type: 'target', position: 'left', id: `${id}-input` },
    { type: 'source', position: 'right', id: `${id}-output` },
  ];

  return (
    <BaseNode title="Transform" handles={handles}>
      <label className="base-node__field">
        <span>Operation</span>
        <select value={operation} onChange={handleChange}>
          {OPERATIONS.map((op) => (
            <option key={op} value={op}>{op}</option>
          ))}
        </select>
      </label>
    </BaseNode>
  );
};
