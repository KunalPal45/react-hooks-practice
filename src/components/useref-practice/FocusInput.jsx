
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div className="useref-card">
      <h2>Focus Input</h2>

      <input
        ref={inputRef}
        className="useref-input"
        type="text"
        placeholder="Enter your name"
      />

      <button
        className="useref-button focus-button"
        onClick={() => inputRef.current.focus()}
      >
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
