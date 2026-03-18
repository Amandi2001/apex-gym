import React from 'react';
// 1. Import your images from the assets folder
import img1 from '../assets/g1.jpg';
import img2 from '../assets/g2.jpg';
import img3 from '../assets/g3.jpg';
import img4 from '../assets/g4.jpg';
import img5 from '../assets/g5.jpeg';
import img6 from '../assets/g6.jpg';

function Gallery() {
  // 2. Map the imported variables to your array
  const images = [
    { id: 1, src: img1, alt: 'Main Gym Floor' },
    { id: 2, src: img2, alt: 'Dumbbell Rack' },
    { id: 3, src: img3, alt: 'Yoga Studio' },
    { id: 4, src: img4, alt: 'Cardio Area' },
    { id: 5, src: img5, alt: 'Boxing Zone' },
    { id: 6, src: img6, alt: 'Locker Rooms' },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title text-center">OUR GALLERY</h2>
        <p className="services-subtitle text-center mb-5">
          Explore our state-of-the-art training facilities
        </p>
        
        <div className="gallery-grid">
          {images.map((image) => (
            <div className="gallery-item" key={image.id}>
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;