
import { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setSeconds(0);
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="useref-card">
      <h2>Stopwatch</h2>

      <h1 className="useref-timer">{seconds} seconds</h1>

      <button className="useref-button start-button" onClick={startTimer}>
        Start
      </button>

      <button className="useref-button stop-button" onClick={stopTimer}>
        Stop
      </button>

      <button className="useref-button reset-button" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
