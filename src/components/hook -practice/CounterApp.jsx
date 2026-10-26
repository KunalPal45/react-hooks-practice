import { useState } from 'react';
import React from 'react'

const CounterApp = () => {
    const[count,setCount]=useState(0);

    function increaseCount(){
        setCount(count + 1)
    }

  
function decreaseCount() {
  if (count > 0) {
    setCount(count - 1);
  }
}


    function resetCount(){
        setCount(0)
    }
  return (
    <>
      
<div className='counter-container'>


      <h1>{count}</h1>
    <div className='counter-buttons'>
            
        <button className='count-add' onClick={increaseCount}>+1</button>
        <button className="count-decrease"  onClick={decreaseCount}>-1</button>
        <button  className="count-reset" onClick={resetCount}>reset</button>
    </div>
    
</div>
    
    
    
    
    </>
    
  )
}

export default CounterApp
