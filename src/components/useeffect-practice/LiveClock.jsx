
import { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h2>Live Clock</h2>
      <h3>{time.toLocaleTimeString("en-GB")}</h3>
    </div>
  );
};

export default LiveClock;
