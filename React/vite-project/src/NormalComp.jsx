import React, { useCallback, useState } from 'react'
import ChildMemo from './ChildMemo'

function NormalComp() {
    const [state, setState] = useState(true)
    // const [num] = useState(10)

    function hello2() {
        console.log('hello')
    }

    const hello = useCallback(hello2, [state])

    console.log('Normal comp rendered')

    return (
        <div>
            <button onClick={() => setState((p) => !p)} >Button</button>
            <h1>Normal</h1>
            <ChildMemo hello={hello} />
        </div>

    )
}

export default NormalComp
