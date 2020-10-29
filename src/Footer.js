import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaGooglePlay } from 'react-icons/fa';

function Footer() {
    return (
        <div>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none" className="svg_circle">
               <circle fill="#6200ea" cx="100" cy="100" r="100"></circle>
            </svg>
            <div className="container_footer">
                <h2 className="footer_title">Find me on</h2>
                <div className="footer_social_link">
                    <a href="https://www.facebook.com/choudary.ghous">
                    <FaFacebookSquare/>
                    </a>
                    <a href="https://www.google.com/">
                    <FaInstagramSquare/>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-abdullah-ghous-76b376137/">
                    <FaLinkedin/>
                    </a>
                    <a href="https://github.com/Abdullahghous">
                    <FaGithubSquare/>
                    </a>
                    <a href="#">
                    <FaGooglePlay/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
