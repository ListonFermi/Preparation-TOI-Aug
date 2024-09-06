import React, { memo } from 'react'

function ChildMemo({ hello }) {

    hello()
    console.log('Memoized comp')

    return (
        <div>
            advkndv
        </div>
    )
}

export default memo(ChildMemo)
