import React, { useState, useEffect } from 'react'

const Clock = () => {
    const [date, setDate] = useState(new Date());

    let timerID = "";
    /**
     * May consider useEffect Hook as componentDidMount, 
     */
    useEffect(() => {
        timerID = setInterval(
            tick,
            1000
        );

        // May consider this return to be componentWillUnmount
        return () => {
            clearInterval(timerID)
        }
    }, []) // An empty array means that componentDidUpdate will not run

    function tick() {
        setDate(new Date());
    }

    return (
        <div> {date.toLocaleTimeString()}</div>
    )
}

export default Clock
