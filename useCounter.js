import { useState } from "react"


 export const useCounter = function(initialValue = 10) {
    const [counter, setCounter] = useState(initialValue);

    const increment = function() {
        setCounter(counter + 1)
    }

    
    const reset = function() {
        setCounter(initialValue)
    }

    
    const decrement = function() {
        setCounter(counter - 1)
    }

    return {
        counter,
        increment,
        reset,
        decrement
    }
}