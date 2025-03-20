import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  // L'état pour l'index de l'image courante
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour afficher l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Fonction pour afficher l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <button type = "button" className="arrow left" onClick={prevImage}>❮</button>
      <img src={images[currentIndex]} alt="slider" className="image" />
      <button type = "button" className="arrow right" onClick={nextImage}>❯</button>
    </div>
  );
};

export default ImageSlider;
