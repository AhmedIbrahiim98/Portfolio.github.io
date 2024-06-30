import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Ahmed</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer_link">Testimonials</a>
                </li> 
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/" className="footer_social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://dribbble.com/" className="footer_social-link" target="_blank">
                    <i class="bx bxl-dribbble"></i>
                </a>

                <a href="https://github.com/" className="footer_social-link" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>
            </div>

            <span className='footer_copy'>
                &#196; Ahmedibrahim. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer