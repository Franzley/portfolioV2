import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import RectangleCard from './RectangleCard'
import { MyContext } from './AppContext';

const Navbar = () => {
  let location = useLocation();
  const [pageText, setPageText] = useState("")
  const { text } = useContext(MyContext);

  // When the pathname changes, assigns corresponding text to the page header
  // listens to the pathname and context
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        return setPageText("Projects");
      case '/projects':
        return setPageText("Projects");
      case '/about':
        return setPageText("About Me");
      default:
        return setPageText(text.name);
    }
  }, [location.pathname, text])

  return (
    <div className='my-nav'>
      <div className='my-nav-links'>
        <Link to="/">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="https://drive.google.com/file/d/1SdYWa9MrTcwCiRqlgpDDUJcANFF001Bb/view?usp=sharing">Resume</Link>
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