import { useState, useEffect } from "react";


function Timer() {
  const [time, setTime] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <h1>{time}</h1>
    </div>
  );
}

export default Timer;
