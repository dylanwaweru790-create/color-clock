 import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [bgColor, setBgColor] = useState('#282c34');

  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // List of colors to choose from
  const colors = ['#282c34', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f39c12'];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'sans-serif' }}>
      <h1>Color Clock App</h1>
      <div style={{ fontSize: '3rem', margin: '20px', fontWeight: 'bold' }}>
        {time.toLocaleTimeString()}
      </div>
      <button 
        onClick={changeColor}
        style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', borderRadius: '5px', border: 'none', background: 'white', color: '#333', fontWeight: 'bold' }}
      >
        Change Background Color
      </button>
    </div>
  );
}

export default App;