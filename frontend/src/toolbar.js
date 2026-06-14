// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar">
            <div className="toolbar__title">Pipeline Nodes</div>
            <div className="toolbar__nodes">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='merge' label='Merge' />
                <DraggableNode type='conditional' label='Condition' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='note' label='Note' />
            </div>
        </div>
    );
};
