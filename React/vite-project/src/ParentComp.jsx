import React, { createContext } from 'react'
import Child1 from './Child1'
export const NumContext = createContext(10)

function ParentComp() {



    return (
        <NumContext.Provider value={10} >
            <div>
                <Child1 />
            </div>
        </NumContext.Provider>
    )
}

export default ParentComp
