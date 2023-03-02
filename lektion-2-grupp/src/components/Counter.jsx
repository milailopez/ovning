import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (

        <div className="count">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <button onClick={() => setCount(() => 0)}>
                Reset counter
            </button>
        </div>

    )
}

export default Counter