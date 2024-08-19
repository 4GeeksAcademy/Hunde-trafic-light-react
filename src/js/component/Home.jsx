import React, { useState, useEffect } from 'react';
import '../../styles/index.css'; // Adjust the path as needed

const Home = () => {
  const [color, setColor] = useState('red');
  const [colors, setColors] = useState(['red', 'yellow', 'green']);

  useEffect(() => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedColor', color);
  }, [color]);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const cycleColors = () => {
    const index = colors.indexOf(color);
    const nextIndex = (index + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addColor = () => {
    if (!colors.includes('purple')) {
      setColors([...colors, 'purple']);
    }
  };

  return (
    <div className="traffic-light">
      {colors.map((c) => (
        <div
          key={c}
          className={`light ${color === c ? 'selected glowing' : ''}`}
          style={{ backgroundColor: c }}
          onClick={() => handleColorChange(c)}
        ></div>
      ))}
      <button onClick={cycleColors}>Cycle Colors</button>
      <button onClick={addColor}>Add Purple</button>
    </div>
  );
};

export default Home;
