// textNode.js

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import { BaseNode } from './BaseNode';


const VAR_PATTERN = /\{\{\s*(\w+)\s*\}\}/g;

function extractVariables(text) {
  const seen = new Set();
  const vars = [];
  let match;

  VAR_PATTERN.lastIndex = 0;
  while ((match = VAR_PATTERN.exec(text)) !== null) {
    const name = match[1];
    if (!seen.has(name)) {
      seen.add(name);
      vars.push(name);
    }
  }
  return vars;
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text ?? '{{input}}');
  const textareaRef = useRef(null);
  const updateNodeField = useStore((s) => s.updateNodeField);

  // --- Auto resize textarea ---
  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  useEffect(() => {
    resizeTextarea();
  }, [currText, resizeTextarea]);


  const variables = useMemo(() => extractVariables(currText), [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    updateNodeField(id, 'text', e.target.value);
  };


  const handles = useMemo(() => {
    const dynamicHandles = variables.map((varName, idx) => ({
      type: 'target',
      position: 'left',
      id: `${id}-${varName}`,
      style: {
        top: `${((idx + 1) / (variables.length + 1)) * 100}%`,
      },
      label: varName,
    }));

    return [
      ...dynamicHandles,
      { type: 'source', position: 'right', id: `${id}-output` },
    ];
  }, [id, variables]);

  return (
    <BaseNode title="Text" handles={handles}>
      <label className="base-node__field">
        <span>Text</span>
        <textarea
          ref={textareaRef}
          className="base-node__textarea"
          value={currText}
          onChange={handleTextChange}
          rows={1}
        />
      </label>
      {variables.length > 0 && (
        <div className="base-node__var-tags">
          {variables.map((v) => (
            <span key={v} className="base-node__var-tag">
              {v}
            </span>
          ))}
        </div>
      )}
    </BaseNode>
  );
};
