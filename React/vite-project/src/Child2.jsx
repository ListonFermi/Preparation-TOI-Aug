import React, { useContext } from 'react'
import { NumContext } from './ParentComp'

function Child2() {

    const v = useContext(NumContext)



  return (
    <div>
      val from parent {v}
    </div>
  )
}

export default Child2
