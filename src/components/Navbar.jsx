// import { Link } from "react-router-dom"
// import "./Navbar.css"

// function Navbar() {
//   return (
//     <>
//     <div className="navbar-m">
//     <Link className="link" to="">Home</Link>
//     <Link className="link" to="About">About</Link>
//     <Link className="link" to="Contact">Contact</Link>
//     <Link className="link" to="Service">Service</Link>





//     </div>
//     </>
//   )
// }

// export default Navbar
































































import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <div className="nav flex justify-center gap-4 p-4  bg-gray-500">
        <Link 
          to="" 
          className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-semibold"
        >
          Home
        </Link>
        <Link 
          to="contact" 
          className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-semibold"
        >
          Contact
        </Link>
        <Link 
          to="About" 
          className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-semibold"
        >
          About
        </Link>
      </div>
      

    )
}

export default Navbar