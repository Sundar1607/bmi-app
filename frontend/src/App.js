import React, { useState } from 'react';
import './App.css';
import { FaHeartbeat, FaWeight, FaRulerVertical } from 'react-icons/fa';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = async () => {
    const res = await fetch('/api/bmi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ height: parseFloat(height), weight: parseFloat(weight) })
    });
    const data = await res.json();
    setBmi(data.bmi);

    // Set BMI category
    if (data.bmi < 18.5) setStatus('Underweight');
    else if (data.bmi < 25) setStatus('Normal');
    else if (data.bmi < 30) setStatus('Overweight');
    else setStatus('Obese');
  };

  return (
    <div className="App">
      <div className="container">
        <h1><FaHeartbeat /> Health BMI Calculator</h1>

        <div className="input-group">
          <FaRulerVertical />
          <input type="number" placeholder="Height (cm)" onChange={e => setHeight(e.target.value)} />
        </div>
        <div className="input-group">
          <FaWeight />
          <input type="number" placeholder="Weight (kg)" onChange={e => setWeight(e.target.value)} />
        </div>

        <button onClick={calculateBMI}>Calculate</button>

        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p className={`status ${status.toLowerCase()}`}>{status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
