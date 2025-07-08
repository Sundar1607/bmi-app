import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = async () => {
    const res = await fetch('http://13.235.42.224:5000/bmi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ height: parseFloat(height), weight: parseFloat(weight) })
    });
    const data = await res.json();
    setBmi(data.bmi);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🏥 Health BMI Calculator</h1>
        <input type="number" placeholder="Height (cm)" onChange={e => setHeight(e.target.value)} />
        <input type="number" placeholder="Weight (kg)" onChange={e => setWeight(e.target.value)} />
        <button onClick={calculateBMI}>Calculate</button>
        {bmi && <p>Your BMI is: {bmi}</p>}
      </div>
    </div>
  );
}

export default App;
