
import { useState } from "react";

const BackgroundColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: "30px",
        borderRadius: "10px",
        textAlign: "center",
        minHeight: "200px",
      }}
    >
      <h2>Background Color Changer</h2>

      <h1>Current color: {backgroundColor}</h1>

      <button onClick={() => changeColor("blue")}>
        Blue
      </button>

      <button onClick={() => changeColor("green")}>
        Green
      </button>

      <button onClick={() => changeColor("pink")}>
        Pink
      </button>

      <button onClick={() => changeColor("purple")}>
        purple
      </button>
    </div>
  );
};

export default BackgroundColorChanger;
