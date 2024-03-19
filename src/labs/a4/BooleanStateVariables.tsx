// import useState
import React, { useState } from "react";
function BooleanStateVariables() {
    // declare and initialize boolean state variable
  const [done, setDone] = useState(true);
  return (
    <div>
        {/* render content based on boolean state variable value change state variable value
        when handling events like clicking a checkbox */}
        <h2>Boolean State Variables</h2>
        <p>{done ? "Done" : "Not done"}</p>
        <label className="form-control">
        <input type="checkbox" checked={done}
                onChange={() => setDone(!done)} />
        Done
        </label>
        
        {/* render content based on boolean state variable value */}
        {done && <div className="alert alert-success">
                Yay! you are done</div>}
    </div>
  );
}
export default BooleanStateVariables;

