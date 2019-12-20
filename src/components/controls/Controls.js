import React from 'react'

const Controls = () => {

    const clicked = () => {
        console.log("clicked");
    }

    return (
        <div>
            <button className="btn btn-new" onClick={clicked}>New</button>
            <button className="btn btn-solve" onClick={clicked}>Solve</button>
            <button className="btn btn-check" onClick={clicked}>Check</button>
        </div>
    )
}

export default Controls;