import { useState } from "react";

export default function CounterApp () {
    
const [count, setCount] = useState(0);

  function countUp () {
    setCount(count + 1)
  }

  function countDown () {
    setCount(count -1)
  }

    return (
        <div className="container">
            <button id="counter" onClick={countUp}>Count with me plz ='D</button> <br />
            <span>We have counted to {count} together! :D</span> <br />
            <button id="decrementor" onClick={countDown}>Let's take some numbers out! &gt;:7</button>
        </div>
    )
}