import React from 'react';

const Testimonials = () => {
  const reviews = [
    { 
      text: "APEX GYM changed my life. I lost 30lbs in 6 months thanks to the personalized coaching and the high-energy atmosphere that kept me motivated every single day!", 
      author: "James W.",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=400" 
    },
    { 
      text: "The atmosphere here is electric. Best equipment in town and the recovery spa is exactly what I need after a heavy leg day. I've never felt stronger.", 
      author: "Elena R.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400"
    },
    { 
      text: "Highly professional trainers and a very clean environment. 10/10! The community here is so supportive, it feels more like a family than just a local gym.", 
      author: "Sarah L.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400"
    },
    { 
      text: "I've tried many gyms, but the Strength Area here is unmatched. The modern equipment and expert nutrition plans helped me hit my plateau-breaking goals.", 
      author: "Marcus T.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400"
    },
    { 
      text: "The group classes are fun and energetic! I actually look forward to my 6 AM workouts now, which I never thought would happen in a million years.", 
      author: "Chen S.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400"
    }
  ];

  const scrollReviews = [...reviews, ...reviews];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Success <span>Stories</span></h2>
        
        <div className="testimonial-slider-container">
          <div className="testimonial-slide-track">
            {scrollReviews.map((r, i) => (
              <div key={i} className="quote-card">
                
                <div 
                  className="card-bg-img" 
                  style={{ backgroundImage: `url(${r.image})` }}
                ></div>
                
                <div className="quote-content">
                  <div className="quote-icon">“</div>
                  <p className="quote-text">{r.text}</p>
                  <cite className="quote-author">- {r.author}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;