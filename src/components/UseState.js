

import React , {useState} from 'react';

 function UseState() {
    const [count , setcount] = useState(0)
    const increment= () => {setcount(count + 1)}
  return (
    <div>
    <button onClick={increment} >
      change me
    </button>
    <h1> count is {count}</h1>
  </div>
  )
 
};

export default UseState;