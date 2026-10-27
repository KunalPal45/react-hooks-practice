import { useState, useEffect } from "react";

const WindowWidthTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let deviceType;

  if (width < 768) {
    deviceType = "Mobile";
  } else if (width <= 1024) {
    deviceType = "Tablet";
  } else {
    deviceType = "Desktop";
  }

  return (
    <div>
      <h2>Window Width Tracker</h2>
      <h3>Width: {width}px</h3>
      <p>Device type: {deviceType}</p>
    </div>
  );
};

export default WindowWidthTracker;