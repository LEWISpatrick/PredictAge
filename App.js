import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [predictedAge, setPredictedAge] = useState(null)
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
      setPredictedAge(res.data)
    })
  }
  return (
    <div className='App'>
      <input onChange={(event) => {
        setName(event.target.value)
      }} placeholder='Ex Pedro...'/>
      <button onClick={fetchData}> Predict Age</button>
      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App;
