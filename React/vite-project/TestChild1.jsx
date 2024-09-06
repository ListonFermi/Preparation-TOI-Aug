import React, { useEffect } from 'react'

function TestChild1() {

  useEffect(() => {
    const id = setInterval(() => console.log('timer running'), 1000)

    return () => clearInterval(id)
  }, [])


  return (
    <div>
      Child 1
    </div>
  )
}

export default TestChild1
