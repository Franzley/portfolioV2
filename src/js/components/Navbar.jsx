import React from 'react'
import { Link } from 'react-router-dom'
import RectangleCard from './RectangleCard'

const Navbar = () => {
  return (
    <div className='my-nav'>
      <div className='my-nav-links'>
        <Link to="#">Projects</Link>
        <Link to="#">About</Link>
        <Link to="#">Resume</Link>
        <Link to="#">Contact</Link>
      </div>
      <RectangleCard text="Projects" type="section" />
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