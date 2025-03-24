import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentImage = images[currentIndex];
  if (!currentImage) return null; // Protection contre une liste vide

  return (
    <div className="image-slider">
      <button type="button" className="arrow left" onClick={prevImage} aria-label="Image précédente">❮</button>

      <div className="slide-content">
        <h3><strong>{currentImage.title}</strong></h3>

        {currentImage.pdfLink ? (
          <div>
            {/* Lien pour ouvrir le PDF en plein écran */}
            <a href={currentImage.pdfLink} target="_blank" rel="noopener noreferrer" className="pdf-link">
              🔗 Ouvrir le PDF
            </a>
            {/* Affichage du PDF en mode aperçu */}
            <iframe 
              src={currentImage.pdfLink} 
              width="100%" 
              height="800px" 
              title="Aperçu PDF"
              style={{ border: "none", marginTop: "10px" }} 
            />
          </div>
        ) : (
          <a href={currentImage.src} target="_blank" rel="noopener noreferrer">
            <img src={currentImage.src} alt="slider" className="image" />
          </a>
        )}
      </div>

      <button type="button" className="arrow right" onClick={nextImage} aria-label="Image suivante">❯</button>
    </div>
  );
};

export default ImageSlider;
