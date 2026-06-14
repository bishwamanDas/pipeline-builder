// mergeNode.js

import { useState } from 'react';
import { useStore } from '../store';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  const [separator, setSeparator] = useState(data?.separator ?? '\\n');
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleChange = (e) => {
    setSeparator(e.target.value);
    updateNodeField(id, 'separator', e.target.value);
  };

  const handles = [
    {
      type: 'target',
      position: 'left',
      id: `${id}-input-a`,
      style: { top: '33%' },
    },
    {
      type: 'target',
      position: 'left',
      id: `${id}-input-b`,
      style: { top: '66%' },
    },
    { type: 'source', position: 'right', id: `${id}-output` },
  ];

  return (
    <BaseNode title="Merge" handles={handles}>
      <label className="base-node__field">
        <span>Separator</span>
        <input type="text" value={separator} onChange={handleChange} />
      </label>
    </BaseNode>
  );
};
