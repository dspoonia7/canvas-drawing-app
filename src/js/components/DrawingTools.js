import React, { useState } from 'react';
import { FaPen, FaHighlighter, FaEraser } from 'react-icons/fa';

import StrokeWidthToolBar from './StrokeWidthToolBar';
import ColorToolBar from './ColorToolBar';

function DrawingTools(props) {
  const { tool, setTool, strokeWidth, setStrokeWidth, color, setColor } = props;

  const [tools] = useState([
    {
      id: 'pen',
      name: 'Pen',
      icon: <FaPen />
    },
    {
      id: 'highlighter',
      name: 'Highlighter',
      icon: <FaHighlighter />
    },
    {
      id: 'eraser',
      name: 'Eraser',
      icon: <FaEraser />
    }
  ]);

  const [showSubTools, setShowSubTools] = useState(false);

  const handleStrokeWidthSelect = (width) => {
    setStrokeWidth(width);
  };

  const handleColorSelect = (color) => {
    setColor(color);
  };

  const handleSelectTool = (toolItem) => {
    setShowSubTools(true);

    setTool(toolItem.id);
  };

  return (
    <div className='drawing-tools-wrapper'>
      <div className='drawing-tools'>
        <div>
          <div className='tools'>
            {tools.map((toolItem) => (
              <div
                key={toolItem.id}
                className={`tool ${tool === toolItem.id && 'selected'}`}
                onClick={() => handleSelectTool(toolItem)}
              >
                {toolItem.icon}
              </div>
            ))}
          </div>
        </div>

        <div>
          {showSubTools && (
            <div className='sub-toolbar'>
              {(tool === 'pen' || tool === 'eraser') && (
                <StrokeWidthToolBar
                  strokeWidth={strokeWidth}
                  handleStrokeWidthSelect={handleStrokeWidthSelect}
                />
              )}

              {(tool === 'pen' || tool === 'highlighter') && (
                <ColorToolBar
                  color={color}
                  handleColorSelect={handleColorSelect}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DrawingTools;
