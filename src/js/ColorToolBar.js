import React, { useState } from 'react';
import { ImPencil2 } from 'react-icons/im';

export default function ColorToolBar(props) {
  const { color, handleColorSelect } = props;

  const [colorOptions] = useState(['#000000', '#ff0000', '#00ff00', '#0000ff']);

  return (
    <>
      {colorOptions.map((colorOption) => (
        <div
          key={colorOption}
          className={`tool ${color === colorOption && 'selected'}`}
          onClick={() => handleColorSelect(colorOption)}
        >
          <div className='color-select'>
            <ImPencil2 style={{ color: colorOption }} />
          </div>
        </div>
      ))}
    </>
  );
}
