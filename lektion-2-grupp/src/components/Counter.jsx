import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        
        <div className="count">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
        
    )
}

export default Counter