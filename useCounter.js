import { useState } from 'react'


export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState)

    //const increment = ( factor = 2 ) => {
    //    setCounter( counter + factor );
    //}

    //const decrement = ( factor = 2 ) => {
    //   setCounter( counter - factor );
    //}

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( initialState );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
