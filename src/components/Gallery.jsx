import React from 'react';
import { Maximize2 } from 'lucide-react';
import img1 from '../assets/g1.jpg';
import img2 from '../assets/g2.jpg';
import img3 from '../assets/g3.jpg';
import img4 from '../assets/g4.jpg';
import img5 from '../assets/g5.jpeg';
import img6 from '../assets/g6.jpg';

function Gallery() {
  const images = [
    { id: 1, src: img1, alt: 'Main Gym Floor', layout: 'wide' },
    { id: 2, src: img2, alt: 'Dumbbell Rack', layout: 'tall' },
    { id: 3, src: img3, alt: 'Yoga Studio', layout: 'normal' },
    { id: 4, src: img4, alt: 'Cardio Area', layout: 'normal' },
    { id: 5, src: img5, alt: 'Boxing Zone', layout: 'wide' },
    { id: 6, src: img6, alt: 'Locker Rooms', layout: 'normal' },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">OUR <span>GALLERY</span></h2>
          <p className="gallery-subtitle">
            Experience the atmosphere of elite performance and state-of-the-art facilities.
          </p>
        </div>
        
        <div className="gallery-bento-grid">
          {images.map((image) => (
            <div className={`gallery-card ${image.layout}`} key={image.id}>
              <img src={image.src} alt={image.alt} />
              <div className="gallery-card-overlay">
                <div className="overlay-info">
                  <Maximize2 className="zoom-icon" size={24} />
                  <span>{image.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;