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
      setError('No s\'ha pogut aconseguir es meme. Torna a provar!');
    }
    setLoading(false);
  }

  return (
    <div>
      <h2>Memes</h2>
      <p>Per acabar he volgut posar una pàgina on pots veure memes random d'internet. A veure si en surten de bons :D </p>
      <p>Tria quin tipus de meme vols veure:</p>
      <button onClick={() => fetchMeme('Cute Animals')} className="category-btn memes-btn" style={{marginRight: '1rem'}}>Animals moníssims</button>
      <button onClick={() => fetchMeme('Cats')} className="category-btn memes-btn" style={{marginRight: '1rem'}}>Només moixets</button>
      <button onClick={() => fetchMeme('Funny Animals')} className="category-btn memes-btn">Animals graciosos</button>
      {loading && <p>Carregant...</p>}
      {error && <p style={{color: '#d62828'}}>{error}</p>}
      {meme && (
        <div>
          <img src={meme.url} alt="Meme" style={{width: '400px', height: '400px', borderRadius: '1rem', margin: '1rem 0'}} />
        </div>
      )}
    </div>
  );
}
