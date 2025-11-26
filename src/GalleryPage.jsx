import React, { useState } from 'react';

const images = [
  '20230615_213832.jpg',
  '20230616_205147.jpg',
  'FILE0026.JPG',
  'IMG-20230711-WA0003.jpg',
  'IMG-20230711-WA0009.jpg',
  'IMG-20230711-WA0011.jpg',
  'IMG-20230711-WA0015.jpg',
  'IMG-20230711-WA0020.jpg',
  'IMG-20230711-WA0021.jpg',
  'IMG-20240819-WA0003.jpg',
  'IMG_20230616_204346.jpg',
  'IMG_20230617_200409.jpg',
  'IMG_20230617_201740.jpg',
  'IMG_20230618_161100.jpg',
  'IMG_20230909_201008.jpg',
  'IMG_20240720_181917.jpg',
  'IMG_20240720_190722.jpg',
  'P7080083.JPG',
  'P7080137.JPG',
  'P7080147.JPG',
  'P7090175.JPG',
  'P7090179.JPG',
  'P7090186.JPG',
  'P8050178.JPG',
  'P8060213.JPG',
  'P8060214.JPG',
  'P8060241.JPG',
  'P8060265.JPG',
  'P8060267.JPG',
  'P8070271.JPG',
  'P9060337.JPG',
  'R1-01467-0035.JPG',
  'R1-06119-0001.JPG',
  'R1-06119-0003.JPG',
  'R1-06119-0007.JPG',
  'R1-06119-0010.JPG',
  'R1-06119-0017.JPG',
  'R1-06119-0019.JPG',
  'R1-06119-0026.JPG',
  'R1-06119-0035.JPG',
  'R1-06119-0036.JPG',
  'R1-09943-0003.JPG',
  'R1-09943-0004.JPG',
  'R1-09943-0005.JPG',
  'R1-09943-0009.JPG',
];

function getRandomIndex() {
  return Math.floor(Math.random() * images.length);
}

export default function GalleryPage() {
  const [index, setIndex] = useState(getRandomIndex());

  function goLeft() {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }
  function goRight() {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div>
      <h2>Galeria</h2>
      <p>També he fet un recull de fotos d'alguns des paisatges que hem vist juntes perquè mus ajudin a recordar lo que hem viscut.</p>
      <div className="gallery-container">
        <button onClick={goLeft} className='gallery-button' aria-label="Previous">⟨</button>
        <img
          src={`/src/assets/landscapes/${images[index]}`}
          alt={`Landscape ${index + 1}`}
          className="gallery-image"
        />
        <button onClick={goRight} className='gallery-button' aria-label="Next">⟩</button>
      </div>
      <p>Foto {index + 1} de {images.length}</p>
    </div>
  );
}
