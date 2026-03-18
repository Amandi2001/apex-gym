import React from 'react';

const Testimonials = () => {
  const reviews = [
    { text: "APEX GYM changed my life. I lost 30lbs in 6 months!", author: "James W." },
    { text: "The atmosphere here is electric. Best equipment in town.", author: "Elena R." },
    { text: "Highly professional trainers and a very clean environment. 10/10!", author: "Sarah L." }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Success <span>Stories</span></h2>
        <div className="testimonial-grid">
          {reviews.map((r, i) => (
            <div key={i} className="quote-card">
              <div className="quote-icon">“</div>
              <p className="quote-text">{r.text}</p>
              <cite className="quote-author">- {r.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;