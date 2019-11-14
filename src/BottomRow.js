import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [quarterOn, setQuarterOn] = useState(1);
  const [downOn, setDownOn] = useState(1);
  // const [ballOn, setBallOn] = useState(1);
  // const [yardsToGo, setYardsToGo] = useState (0);

  return (
    <div className="bottomRow">
        <button onClick={() => setDownOn(downOn + 1)}>Down Forward</button>
        <button onClick={() => setDownOn(1)}>Down Reset</button>
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downOn}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterOn}</div>
      </div>
      <div className='extraButtons'>
        <button onClick={() => setQuarterOn(quarterOn + 1)}>Quarter Forward</button>
        <button onClick={() => setQuarterOn(1)}>Quarter Reset</button>
      </div>
    </div>
  );
};

export default BottomRow;
