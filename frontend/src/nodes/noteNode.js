// noteNode.js

import { useState, useRef, useEffect, useCallback } from 'react';
import { useStore } from '../store';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text ?? 'Add a note...');
  const textareaRef = useRef(null);
  const updateNodeField = useStore((s) => s.updateNodeField);

  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  useEffect(() => {
    resizeTextarea();
  }, [text, resizeTextarea]);

  const handleChange = (e) => {
    setText(e.target.value);
    updateNodeField(id, 'text', e.target.value);
  };

  return (
    <BaseNode title="Note" handles={[]}>
      <textarea
        ref={textareaRef}
        className="base-node__textarea"
        value={text}
        onChange={handleChange}
        rows={2}
      />
    </BaseNode>
  );
};
