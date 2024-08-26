import React, { useCallback, useState } from 'react'
import MemComp from './MemComp'

function UseCallbackSample() {

    const [state, setState] = useState(true)

    // function funFunc(){
    //     console.log('funFunc')
    // }

    const funFunc = useCallback(()=>{
        console.log('funFunc')
    },[])

    function calculateRootOf(num){
        return Math.sqrt(num)
    }

    const calc = calculateRootOf(49)


    return (
        <div>
            <button onClick={() => setState(currState => !currState)}>Change State</button>
            <MemComp funFunc={funFunc} calc={calc} />
        </div>
    )
}

export default UseCallbackSample
