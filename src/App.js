// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showInput, setShowInput] = useState({ topLeft: false, topRight: false, bottomLeft: false, bottomRight: false });
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (quadrant) => {
    setShowInput({ ...showInput, [quadrant]: true });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e, quadrant) => {
    if (e.key === 'Enter') {
      console.log(`User input in ${quadrant}:`, inputValue);
      setShowInput({ ...showInput, [quadrant]: false });
      setInputValue("");
    }
  };

  return (
    <div className="app">
      <h1 className="title">Eisenhower Matrix ScratchPad</h1>
      <div className="matrix">
        {/* Axis Labels */}
        <div className="axis-label important-label">Important</div>
        <div className="axis-label not-important-label">Not Important</div>
        <div className="axis-label urgent-label">Urgent</div>
        <div className="axis-label not-urgent-label">Not Urgent</div>

        {/* Matrix Cells with Buttons and Conditional Input */}
        <div className="cell top-left">
          <button className="add-button" onClick={() => handleButtonClick("topLeft")}>+</button>
          {showInput.topLeft && (
            <input
              type="text"
              className="input-box"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(e) => handleInputKeyPress(e, "topLeft")}
            />
          )}
        </div>
        
        <div className="cell top-right">
          <button className="add-button" onClick={() => handleButtonClick("topRight")}>+</button>
          {showInput.topRight && (
            <input
              type="text"
              className="input-box"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(e) => handleInputKeyPress(e, "topRight")}
            />
          )}
        </div>
        
        <div className="cell bottom-left">
          <button className="add-button" onClick={() => handleButtonClick("bottomLeft")}>+</button>
          {showInput.bottomLeft && (
            <input
              type="text"
              className="input-box"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(e) => handleInputKeyPress(e, "bottomLeft")}
            />
          )}
        </div>
        
        <div className="cell bottom-right">
          <button className="add-button" onClick={() => handleButtonClick("bottomRight")}>+</button>
          {showInput.bottomRight && (
            <input
              type="text"
              className="input-box"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(e) => handleInputKeyPress(e, "bottomRight")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
