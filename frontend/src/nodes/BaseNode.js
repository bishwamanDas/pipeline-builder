// BaseNode.js

import { Handle, Position } from 'reactflow';

const POSITION_MAP = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};


export const BaseNode = ({ title, handles = [], children, style = {} }) => {
  return (
    <div className="base-node" style={style}>
      {/* Header */}
      <div className="base-node__header">
        <span className="base-node__title">{title}</span>
      </div>

      {/* Body */}
      <div className="base-node__body">
        {children}
      </div>

      {/* Handles */}
      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={POSITION_MAP[h.position] ?? Position.Left}
          id={h.id}
          style={h.style}
          className="base-node__handle"
        />
      ))}
    </div>
  );
};
