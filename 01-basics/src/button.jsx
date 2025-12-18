import { useState } from "react";
function button() {

      const [count, setCount] = useState(0); // state
     
    return (
            <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click to increment
      </button>
    </div>

       
    );
}

export default button