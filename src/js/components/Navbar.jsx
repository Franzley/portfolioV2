import React from 'react'
import { Link } from 'react-router-dom'
import RectangleCard from './RectangleCard'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  let location = useLocation();
  const [pageText, setPageText] = useState("")
  useEffect(() => {
    setPageText(location.pathname === "/" ? "Projects" : "About Me")
  }, [location.pathname])

  return (
    <div className='my-nav'>
      <div className='my-nav-links'>
        <Link to="/">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="https://drive.google.com/file/d/1SdYWa9MrTcwCiRqlgpDDUJcANFF001Bb/view?usp=sharing">Resume</Link>
        <Link to="">Contact</Link>
      </div>
      <RectangleCard text={pageText} type="section" />
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