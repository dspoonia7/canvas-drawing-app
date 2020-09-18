import React, { useState } from 'react';
import DrawingTools from './DrawingTools';
import DrawingBoard from './DrawingBoard';

import { convertHexToRGBA } from '../utils/CoreUtils';

function MainContainer() {
  const [tool, setTool] = useState('pen');
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [highlighterStrokeWidth] = useState(5);
  const [color, setColor] = useState('#ff0000');

  console.log('render', tool, strokeWidth, color);

  return (
    <div className='main-wrapper'>
      <DrawingTools
        tool={tool}
        setTool={setTool}
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
        color={color}
        setColor={setColor}
      />

      <DrawingBoard
        tool={tool}
        strokeWidth={
          tool === 'highlighter' ? highlighterStrokeWidth : strokeWidth
        }
        color={tool === 'highlighter' ? convertHexToRGBA(color, 50) : color}
      />
    </div>
  );
}

export default MainContainer;
