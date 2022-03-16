import { Link } from 'react-router-dom'
import './FooterStyle.css'
// import brandLogo from '../../images/brandLogo.svg'
// import rocket  from '../../images/rocket.svg'
// import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FiFacebook , FiGithub } from "react-icons/fi"
import {FaTelegramPlane,FaInstagram,FaLinkedinIn} from "react-icons/fa"


import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <>
      
      <div className='footer px-0  pb-3 my-0'>
      <div className="row d-flex justify-content-center">
            <div style={{zIndex:"10"}} className="d-flex w-75 text-center justify-content-center rounded-bottom grad">
                <div className="row pb-4 pt-3 px-3 d-flex align-items-center">
                </div>
            </div>
          </div>
        <div className='container-fluid m-0 p-0'>
        
          <div className='row ms-0 d-flex justify-content-start align-items-center'>
            <div className='col-1 py-3 ps-5'><img className='logo' src={logo} alt="Logo" /> </div>
            {/* <div className='col-1 py-4'><p style={{color:"#000",fontSize:"2rem", fontFamily:"Rubik",fontWeight:"600"}} >ECHIO</p></div> */}
          </div>

          <div className='row pb-3  ms-0 d-flex justify-content-center'>

            <div className='col-lg-2 col-sm-4 '>
              <h5>Products</h5>
              <p>Popup Builder</p>
              <p>Web-design</p>
              <p>Content</p>
              <p>Integrations</p>
            </div>
            <div className='col-lg-2 col-sm-4 '>
            <h5>Use Cases</h5>
            <p>Marketers</p>
            <p>Small Business</p>
            <p>Website Builder</p>
            </div>
            <div className='col-lg-2 col-sm-4 '>
            <h5>Company</h5>
            <p><Link style={{color:"#fff", textDecoration:"none"}} to="/team">Teams</Link></p>
            <p><a style={{color:"#fff", textDecoration:"none"}} className='c-f ' href='#contact'>Contact Us</a></p>
            </div>
              <div className='col-lg-4 col-sm-12 '>
                <h5>Let's do it</h5>
                <div className='row  ms-0 d-flex justify-content-start align-items-center'>
                <div className='col-lg-2 col-sm-1 '><FaLinkedinIn className='footerIcons'/></div>
                <div className='col-lg-2 col-sm-1'><FiFacebook className='footerIcons'/></div>
                <div className='col-lg-2 col-sm-1'><FaTelegramPlane className='footerIcons'/></div>
                <div className='col-lg-2 col-sm-1'><FaInstagram className='footerIcons'/></div>
                <div className='col-lg-2 col-sm-1'><FiGithub className='footerIcons'/></div>
              </div>

            </div>
          </div>

          

          <div className='row ms-0 d-flex justify-content-center align-items-center'>
            <hr style={{color:"#fff", border:"0.5px solid"}}/>
            <div className='col-3 pt-3 ms-0 text-center'>© 2022 All Rights Reserved</div>
          </div>

      </div>
      </div>
    </>
  );
};
export default Footer;
