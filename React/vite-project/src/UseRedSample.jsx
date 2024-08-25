import React, { useReducer } from 'react'

function UseRedSample() {

    function reducer(state, action) {
        if (action === 'inc') return ++state
        if (action === 'dec') return --state
    }

    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <button onClick={() => dispatch('dec')}>-</button>
            <div>{count}</div>
            <button onClick={() => dispatch('inc')}>+</button>
        </>
    )
}

export default UseRedSample
