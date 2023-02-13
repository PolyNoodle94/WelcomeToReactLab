import React, {useState} from "react"


function Counter() {

    const [count, setCount] = useState(0)

    function increment() {

        setCount(count + 1)

    }

    return (
        <div id='container'>
          <div id='navbar'>
            Counter.js
          </div>
          <div id='counter'>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
          </div>
        </div>
      )

}

export default Counter