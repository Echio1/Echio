import { Link } from 'react-router-dom'
import './FooterStyle.css'
// import brandLogo from '../../images/brandLogo.svg'
// import rocket  from '../../images/rocket.svg'
// import { BsLinkedin, BsInstagram } from "react-icons/bs";
import {FaDiscord,FaLinkedinIn, FaYoutube} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"


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
        
          <div className='row my-2 py-1 ms-0 d-flex justify-content-start'>
            <div className='col-lg-2 col-sm-6 col-xs-6 py-3 ps-5'><img className='logo' src={logo} alt="Logo" /> 
            <Link className="w-100 px-2 " to="/" style={{textDecoration:"none", color:"#fff",fontSize:"1.8rem", fontWeight:"600"}}>ECHIO</Link>
            </div>

          {/* </div> */}

          {/* <div className='row pb-3  ms-0 d-flex justify-content-center'> */}

            <div className='col-lg-2  content-to-hide'>
              <div>
                <h5>Products</h5>
                  <p>Popup Builder</p>
                  <p>Web-design</p>
                  <p>Content</p>
                  <p>Integrations</p>
              </div>
            </div>

            <div className='col-lg-2 content-to-hide'>
              <div>
                <h5>Use Cases</h5>
                <p>Marketers</p>
                <p>Small Business</p>
                <p>Website Builder</p>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-xs-6 '>
            <h5>Company</h5>
            <p ><Link className='w-100  team-linkF' style={{color:"#fff", textDecoration:"none"}} to="/team"> Teams</Link></p>
            <p><Link className='w-100 c-f team-linkF' style={{color:"#fff", textDecoration:"none"}} href='#contact' to="/">Contact Us</Link></p>
            </div>
              <div className='col-lg-4 col-sm-12 '>
                <h5>Let's do it</h5>
                <div className='row  ms-0 d-flex  align-items-center'>
                <div className='col-lg-2 col-sm-3 '><a href='https://www.linkedin.com/company/echiofy-private-limited/'><FaLinkedinIn size={"20px"} className='footerIcons'/></a></div>
                <div className='col-lg-2 col-sm-3'><a href='https://discord.com/invite/xAWXn4Ftg6'><FaDiscord  size={"20px"} className='footerIcons'/></a></div>
                <div className='col-lg-2 col-sm-3'><a href='https://www.instagram.com/deresports/?hl=en'><RiInstagramFill  size={"20px"} className='footerIcons'/></a></div>
                <div className='col-lg-2 col-sm-3'><a href='https://www.youtube.com/c/deresports/'><FaYoutube  size={"20px"} className='footerIcons'/></a></div>
                {/* <div className='col-lg-2 col-sm-6'><a href=''><FiFacebook className='footerIcons'/></a></div> */}
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
