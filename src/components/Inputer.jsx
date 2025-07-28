import React, { useState } from 'react';

function InputChangeExample() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>Enter your name:</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <p>You typed: <strong>{name}</strong></p>
    </div>
  );
}

export default InputChangeExample;
