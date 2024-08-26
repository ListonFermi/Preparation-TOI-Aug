import React, { memo } from 'react'

function MemComp({funFunc,calc}) {

    funFunc()

    console.log('React mom component rendered')
    console.log({calc})

    return (
        <div>
            React Memo
        </div>
    )
}

// export default MemComp
export default memo(MemComp)
