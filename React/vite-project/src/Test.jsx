import React, { useState } from 'react'
import TestChild1 from '../TestChild1'
import TestChild2 from '../TestChild2'

function Test() {

    const [state, setState] = useState(true)

    return (
        <>
            <div>
                {state ? <TestChild1 /> : <TestChild2 />}
            </div>
            <button onClick={() => setState(false)} >Button</button>
        </>
    )
}

export default Test
