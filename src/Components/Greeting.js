import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Greeting() {
    return (
        <div className="greetings">
            <div>
                <h1>Welcome to Calculator App</h1>
            </div>
            <div>
                <Link to="/app">Go to App</Link>
            </div>
        </div>
    )
}

export default Greeting
