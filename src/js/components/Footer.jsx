import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <p>Franzley Bonhomme Portfolio. Full-Stack Web Developer</p>
        <div className='social-media'>
          <div>
          <i className="fa-brands fa-linkedin"></i>
          </div>
          <div>
          <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
      <div className='footer-bottom'><i className="fa-solid fa-envelope"></i> franzleybonhomme003@gmail.com</div>
    </div>
  )
}

export default Footer