import React, { useState } from 'react';
import './App.css'; // Import the CSS file

export default function CodeEntryPage({ onUnlock }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    if (input === '241122') {
      onUnlock();
    } else {
      setError('Has fallat! Torna-ho a provar!');
    }
  }

  return (
    <div className="code-entry-container">
      <h2>Entra es codi secret</h2>
      <p>Hauràs de pensar quin codi he posat :D</p>
      <form onSubmit={handleSubmit} className="code-entry-form">
        <input
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Codi"
          className="code-entry-input"
        />
        <br /><br />
        <button type="submit" className="category-btn">
          Accedeix
        </button>
      </form>
      {error && <p className="code-entry-error">{error}</p>}
    </div>
  );
}
