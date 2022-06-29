import React from 'react';
import { useState } from 'react/cjs/react.development';

const TempToggleButton = ({ unitIsCelsius, setUnit }) => {
  return (
    <button
      className={`temp-toggle-button ${unitIsCelsius ? 'toggle-c' : 'toggle-f'}`}
      onClick={() => {
        setUnit(!unitIsCelsius);
      }}
    >
      {unitIsCelsius ? (
        <span>&deg;C</span>
      ) : (
        <span>&deg;F</span>
      )}
    </button>
  );
};

export default TempToggleButton;
