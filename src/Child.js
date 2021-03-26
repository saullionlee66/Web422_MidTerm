import React from 'react'

function Child({setMessage}) {
    const handleClick = ()=>{
        setMessage("This is a message from child");
    }
    return (
        <div>
            <button onClick={handleClick} >Set Message</button>
        </div>
    )
}

export default Child
