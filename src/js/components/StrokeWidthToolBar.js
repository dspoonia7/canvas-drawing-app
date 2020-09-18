import React, { useState } from 'react';

export default function StrokeWidthToolBar(props) {
  const { strokeWidth, handleStrokeWidthSelect } = props;

  const [strokeWidthOptions] = useState([1, 3, 5]);

  return (
    <>
      {strokeWidthOptions.map((widthOption) => (
        <div
          key={widthOption}
          className={`tool ${strokeWidth === widthOption && 'selected'}`}
          onClick={() => handleStrokeWidthSelect(widthOption)}
        >
          <div
            className='stroke-select'
            style={{ width: 2 * widthOption, height: 2 * widthOption }}
          >
            <div className='tooltip'>Pen Thickness</div>
          </div>
        </div>
      ))}
    </>
  );
}
