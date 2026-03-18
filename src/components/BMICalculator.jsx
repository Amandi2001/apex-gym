import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [msg, setMsg] = useState('');

  const calculate = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const hMeters = height / 100;
      const val = (weight / (hMeters * hMeters)).toFixed(1);
      setBmi(val);
      if (val < 18.5) setMsg('Underweight');
      else if (val < 24.9) setMsg('Healthy');
      else setMsg('Overweight');
    }
  };

  return (
    <section className="bmi-tool-section">
      <div className="bmi-overlay"></div>
      <div className="bmi-wrapper">
        <h2 className="bmi-header">BMI <span>CALCULATOR</span></h2>
        <p className="bmi-subtitle">Check your health status instantly with our professional tool.</p>
        
        <form className="bmi-form" onSubmit={calculate}>
          <div className="bmi-input-group">
            <label>WEIGHT (KG)</label>
            <input 
              type="number" 
              className="bmi-field"
              placeholder="Enter weight" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
            />
          </div>

          <div className="bmi-input-group">
            <label>HEIGHT (CM)</label>
            <input 
              type="number" 
              className="bmi-field"
              placeholder="Enter height" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
            />
          </div>

          <button type="submit" className="bmi-calc-btn">CALCULATE NOW</button>
        </form>

        {bmi && (
          <div className="bmi-feedback-result">
            <p>YOUR BMI IS <span>{bmi}</span></p>
            <p className="bmi-status">STATUS: {msg}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BMICalculator;