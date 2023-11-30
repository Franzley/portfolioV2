import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='my-nav'>
      <div className='my-nav-links'>
        <Link to="#">PROJECTS</Link>
        <Link to="#">ABOUT</Link>
        <Link to="#">RESUME</Link>
        <Link to="#">CONTACT</Link>
      </div>
    </div>
  )
}

export default Navbar


















// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <ul className='navbar-links'>
//         <li><Link to="#">Projects</Link></li>
//         <li><Link to="#">About</Link></li>
//         <li><Link to="#">Resume</Link></li>
//         <li><Link to="#">Contact</Link></li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar