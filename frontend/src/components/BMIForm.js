import React, { useState } from 'react';
import axios from 'axios';

function BMIForm() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculate = async () => {
    const res = await axios.post('/api/bmi', { weight, height });
    setBmi(res.data.bmi);
  };

  return (
    <div>
      <input type="number" placeholder="Weight (kg)" onChange={e => setWeight(e.target.value)} />
      <input type="number" placeholder="Height (cm)" onChange={e => setHeight(e.target.value)} />
      <button onClick={calculate}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}

export default BMIForm;
