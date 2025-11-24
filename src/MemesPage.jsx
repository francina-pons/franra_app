import React, { useState } from 'react';

const GROUPS = {
  'Cute Animals': ['aww', 'Eyebleach', 'rarepuppers'],
  'Cats': ['cats'],
  'Funny Animals': ['AnimalsBeingBros', 'AnimalsBeingDerps', 'adviceanimals', 'wholesomememes']
};

export default function MemesPage() {
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchMeme(group) {
    setLoading(true);
    setError('');
    setMeme(null);
    const subreddits = GROUPS[group];
    const subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    try {
      const res = await fetch(`https://meme-api.com/gimme/${subreddit}`);
      const data = await res.json();
      setMeme(data);
    } catch (err) {
      setError('No s\'ha pogut aconseguir el meme. Torna a provar!');
    }
    setLoading(false);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Memes</h2>
      <p>Tria quin tipus de meme vols veure:</p>
      <button onClick={() => fetchMeme('Cute Animals')} style={{fontSize: '1.2rem', padding: '0.5rem 2rem', borderRadius: '0.5rem', background: '#145b23', color: '#fff', border: 'none', marginBottom: '1rem', marginRight: '1rem'}}>Animals moníssims</button>
      <button onClick={() => fetchMeme('Cats')} style={{fontSize: '1.2rem', padding: '0.5rem 2rem', borderRadius: '0.5rem', background: '#003049', color: '#fff', border: 'none', marginBottom: '1rem', marginRight: '1rem'}}>Només moixets</button>
      <button onClick={() => fetchMeme('Funny Animals')} style={{fontSize: '1.2rem', padding: '0.5rem 2rem', borderRadius: '0.5rem', background: '#f77f00', color: '#fff', border: 'none', marginBottom: '1rem'}}>Animals graciosos</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: '#d62828'}}>{error}</p>}
      {meme && (
        <div>
          <img src={meme.url} alt="Meme" style={{width: '400px', height: '400px', objectFit: 'cover', borderRadius: '1rem', margin: '1rem 0'}} />
        </div>
      )}
    </div>
  );
}
