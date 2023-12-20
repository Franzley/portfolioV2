import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div>
          <h2>Franzley Bonhomme Portfolio</h2>
          <h2>Full-Stack Web Developer</h2>
        </div>
        <div className='social-media'>
          <div>
            <a href='https://www.linkedin.com/in/franzley-bonhomme-8a1b77247/'><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <div>
            <a href='https://github.com/Franzley'><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'><i className="fa-solid fa-envelope"></i> franzleybonhomme003@gmail.com</div>
    </div>
  )
}

export default Footer