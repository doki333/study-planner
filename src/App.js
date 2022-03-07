import './App.css';
import StopWatch from './components/StopWatch';
import Planner from './components/Planner';
import Goal from './components/Goal';
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState({});
  useEffect(() => {
    console.log('effect...');
    fetch('https://type.fit/api/quotes')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const randomNum = Math.floor(Math.random() * 1600);
        setQuotes(data[randomNum]);
      });
  }, []);
  return (
    <>
      <StopWatch quotes={quotes} />
      <Planner />
      <Goal />
    </>
  );
}

export default App;
