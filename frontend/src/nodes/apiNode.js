// apiNode.js

import { useState } from 'react';
import { useStore } from '../store';
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url ?? 'https://api.example.com');
  const [method, setMethod] = useState(data?.method ?? 'GET');
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    updateNodeField(id, 'url', e.target.value);
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
    updateNodeField(id, 'method', e.target.value);
  };

  const handles = [
    { type: 'target', position: 'left', id: `${id}-input` },
    { type: 'source', position: 'right', id: `${id}-response` },
  ];

  return (
    <BaseNode title="API" handles={handles}>
      <label className="base-node__field">
        <span>URL</span>
        <input type="text" value={url} onChange={handleUrlChange} />
      </label>
      <label className="base-node__field">
        <span>Method</span>
        <select value={method} onChange={handleMethodChange}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
    </BaseNode>
  );
};
