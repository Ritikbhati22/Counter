import React from "react";
import { useState } from "react";
const Counter = () =>{
    const [ritik,setritik] = useState(0);
    return (
        <div>
      <h1>The Counter :  {ritik}</h1>
      <button onClick={(() => setritik(ritik + 1))}>INCREMENT</button>
      <button onClick={(() => setritik(ritik -1))}>DECREMENT</button>
    </div>
    );
}
export default Counter;
