// Implement a Counter component with two buttons:
// “Increase” and “Decrease”, which displays the current counter value.
import React ,{ useState } from 'react'

function Counter() {
    // Your code goes here

    const [ counter, setCount ] = useState(0);

    const increase = () => {
        setCount(counter + 1);
    }
    const decrease = () => {
        setCount(counter - 1)
    }
    return(
        <>
        <h1>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        </>
    );

}

export default Counter