// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="title">Eisenhower Matrix ScratchPad</h1>
      <div className="matrix">
        {/* Axis Labels */}
        <div className="axis-label important-label">Important</div>
        <div className="axis-label not-important-label">Not Important</div>
        <div className="axis-label urgent-label">Urgent</div>
        <div className="axis-label not-urgent-label">Not Urgent</div>

        {/* Matrix Cells */}
        <div className="cell top-left">Top Left</div>
        <div className="cell top-right">Top Right</div>
        <div className="cell bottom-left">Bottom Left</div>
        <div className="cell bottom-right">Bottom Right</div>
      </div>
    </div>
  );
}

export default App;
