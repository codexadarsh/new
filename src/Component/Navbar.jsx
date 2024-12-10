import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="nav">
            <a href="#">Geninvo</a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            <div>
            <button>Sign Up</button>
            <button>Login</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar