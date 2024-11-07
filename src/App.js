// App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const quadrants = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
  const colors = {
    topLeft: 'green',
    topRight: 'orange',
    bottomLeft: 'yellow',
    bottomRight: 'red'
  };

  const [tasks, setTasks] = useState({
    topLeft: [],
    topRight: [],
    bottomLeft: [],
    bottomRight: []
  });

  const addTask = (category) => {
    const messageContent = prompt('Enter task message:');
    if (messageContent) {
      const newTask = { content: messageContent, rank: tasks[category].length };
      setTasks((prevTasks) => ({
        ...prevTasks,
        [category]: [...prevTasks[category], newTask]
      }));
    }
  };

  const deleteTask = (category, rank) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks[category].filter((_, index) => index !== rank);
      return {
        ...prevTasks,
        [category]: updatedTasks
      };
    });
  };

  const editTask = (category, rank) => {
    const newMessageContent = prompt('Edit task message:', tasks[category][rank].content);
    if (newMessageContent) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks[category]];
        updatedTasks[rank].content = newMessageContent;
        return {
          ...prevTasks,
          [category]: updatedTasks
        };
      });
    }
  };

  return (
    <div className="app">
      <h1 className="title">Eisenhower Matrix ScratchPad</h1>
      <div className="matrix">
        <div className="axis-label important-label">Important</div>
        <div className="axis-label urgent-label">Urgent</div>
        
        <div className={`cell topLeft`} style={{ backgroundColor: colors['topLeft'] }}>
          <button className="add-button" onClick={() => addTask('topLeft')}>+</button>
          {tasks.topLeft.map((task, index) => (
            <div key={index} className="task-item">
              <span>{task.content}</span>
              <button onClick={() => editTask('topLeft', index)}>edit</button>
              <button onClick={() => deleteTask('topLeft', index)}>-</button>
            </div>
          ))}
        </div>

        <div className={`cell topRight`} style={{ backgroundColor: colors['topRight'] }}>
          <button className="add-button" onClick={() => addTask('topRight')}>+</button>
          {tasks.topRight.map((task, index) => (
            <div key={index} className="task-item">
              <span>{task.content}</span>
              <button onClick={() => editTask('topRight', index)}>edit</button>
              <button onClick={() => deleteTask('topRight', index)}>-</button>
            </div>
          ))}
        </div>

        <div className="axis-label not-important-label">Not Important</div>
        
        <div className={`cell bottomLeft`} style={{ backgroundColor: colors['bottomLeft'] }}>
          <button className="add-button" onClick={() => addTask('bottomLeft')}>+</button>
          {tasks.bottomLeft.map((task, index) => (
            <div key={index} className="task-item">
              <span>{task.content}</span>
              <button onClick={() => editTask('bottomLeft', index)}>edit</button>
              <button onClick={() => deleteTask('bottomLeft', index)}>-</button>
            </div>
          ))}
        </div>

        <div className={`cell bottomRight`} style={{ backgroundColor: colors['bottomRight'] }}>
          <button className="add-button" onClick={() => addTask('bottomRight')}>+</button>
          {tasks.bottomRight.map((task, index) => (
            <div key={index} className="task-item">
              <span>{task.content}</span>
              <button onClick={() => editTask('bottomRight', index)}>edit</button>
              <button onClick={() => deleteTask('bottomRight', index)}>-</button>
            </div>
          ))}
        </div>

        <div className="axis-label not-urgent-label">Not Urgent</div>
      </div>
    </div>
  );
};

export default App;
