// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: 'target',
      position: 'left',
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
      label: 'System',
    },
    {
      type: 'target',
      position: 'left',
      id: `${id}-prompt`,
      style: { top: `${200 / 3}%` },
      label: 'Prompt',
    },
    {
      type: 'source',
      position: 'right',
      id: `${id}-response`,
    },
  ];

  return (
    <BaseNode title="LLM" handles={handles}>
      <span className="base-node__description">This is a LLM.</span>
    </BaseNode>
  );
};
