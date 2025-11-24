import React, { useState } from 'react';

export default function CodeEntryPage({ onUnlock }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: elimina quan estigui fet
    onUnlock();
    if (input === '2422') {
      onUnlock();
    } else {
      setError('Has fallat! Torna-ho a provar!');
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '6rem auto', textAlign: 'center' }}>
      <h2>Entra es codi secret</h2>
      <p>Hauràs de pensar quin codi he posat :D</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Codi"
          style={{ fontSize: '1.5rem', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ccc', width: '80%' }}
        />
        <br /><br />
        <button type="submit" style={{ fontSize: '1.2rem', padding: '0.5rem 2rem', borderRadius: '0.5rem', background: '#003049', color: '#fff', border: 'none' }}>
          Accedeix
        </button>
      </form>
      {error && <p style={{ color: '#d62828', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}
