import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [gbInput, setGbInput] = useState({ text: '', isTyping: true });
  const [mbInput, setMbInput] = useState({ text: '', isTyping: true });

  const handleGbInput = (e) => {
    setGbInput({ isTyping: true, text: e.target.value });
    setMbInput({ ...mbInput, isTyping: false });
  };

  const handleMbInput = (e) => {
    setMbInput({ isTyping: true, text: e.target.value });
    setGbInput({ ...gbInput, isTyping: false });
  };

  return (
    <section className="section">
      <div className="i1">
        {!mbInput.isTyping || gbInput.isTyping ? (
          <input
            type="number"
            value={gbInput.text}
            onChange={(e) => handleGbInput(e)}
            className="input input1"
            id="i1"
          />
        ) : (
          <input
            type="number"
            value={mbInput.text && mbInput.text / 1024}
            readOnly
            onFocus={() => setGbInput({ ...gbInput, isTyping: true })}
          />
        )}
        <label htmlFor="i1">gb</label>
      </div>
      <div className="i2">
        {!gbInput.isTyping || mbInput.isTyping ? (
          <input
            type="number"
            value={mbInput.text}
            onChange={(e) => handleMbInput(e)}
            className="input input2"
            id="i2"
          />
        ) : (
          <input
            type="number"
            value={gbInput.text && gbInput.text * 1024}
            readOnly
            onFocus={() => setMbInput({ ...mbInput, isTyping: true })}
          ></input>
        )}
        <label htmlFor="i2">mb</label>
      </div>
    </section>
  );
};

export default App;
