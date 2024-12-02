import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);

  return (
    <div className="Container">
      <p id="Display">{count}</p>
      <div className="btnContainer">
        <div className="circle">
          <button onClick={handleIncrease}>
            <img src="arrow-up-icon.png" alt="Arrow Up" />
          </button>
        </div>
        <div className="circle">
          <button onClick={handleDecrease}>
            <img src="arrow-up-icon.png" alt="Arrow Down" style={{ transform: "rotate(180deg)" }} />
          </button>
        </div>
        <div className="circle">
          <button onClick={handleReset}>{"R"}</button>
        </div>
      </div>
    </div>
  );
};

export default App;
