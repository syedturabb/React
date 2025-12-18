import React, { useState } from "react";
function Products({naam, data}){
  const [a,b] = useState(false);
    return (
        <> 
      <div className="text-white w-full h-60 bg-amber-600">{naam}  {data.age}</div>
             <h1>{a === false ? "hello":"hey"}</h1>
             <button onClick={() => b(!a)} className="px-3 py-1 bg-green-300 rounded-md"> Click to chnage</button>
           
      </>
    );
}
export default Products