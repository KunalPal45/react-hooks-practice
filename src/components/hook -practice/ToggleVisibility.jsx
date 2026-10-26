import { useState } from "react";


const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="visibility-container">
      <h2 className="visibility-title">Toggle Visibility</h2>

      {isVisible && (
        <p className="visibility-text">
          Until the death every defeat is the mind making deafeat.
        </p>
      )}

      <button
        className={`visibility-btn ${isVisible ? "hide-btn" : "show-btn"}`}
        onClick={toggleParagraph}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ToggleVisibility;
