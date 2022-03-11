// import { Container } from "react-bootstrap";
import "./style.css";
import row1img from "../../images/row1img.svg"
import row3img from "../../images/row3img.svg"
import inf1 from "../../images/inf1.jpeg"
import inf2 from "../../images/inf2.jpeg"
import inf3 from "../../images/inf3.jpeg"
import brandLogos from "../../images/brandLogos.svg"



import { Button } from "react-bootstrap";
import NavBar from "../Navbar/Navbar";

import icon1 from '../../images/starIcon.svg'
import icon2 from '../../images/Linkicon.svg'
import icon3  from '../../images/tickIcon.svg'

const LandingPage = () => {
  return (
    <> 
       <NavBar/>
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                <h1>
                  "There are <mark className="diffColor">exceptional</mark> people
                  out there who are capable of starting
                  <mark className="diffColor">epidemics</mark>. All we have to do is{" "}
                  <mark className="diffColor">find</mark> them."
                </h1>
              </div>
              <div className="d-none d-md-block col-md-5 d-flex align-items-center justify-content-end">
                <img src={row1img} alt="notebook png"  style={{width:"90%"}}/>
              </div>
            </div>

            <div className="row d-flex">
              <div className="mailHolder">
              {/* <input placeholder="Enter your email" className="mailPara"></input> */}
                <Button className="mailButton">Get Started</Button>
              </div>
            </div>

          </div>
          

          <div style={{marginTop:"8rem"}} className="row d-flex  justify-content-end">

              <div className="col-lg-2 ">
                <h3></h3>
              </div>
              <div className="col-2"></div>
              <div className="col-2"></div>
              <div className="col-4">
                <img src={row3img} alt="our clients" />
              </div>
          </div>

          <div className="container">
              <div style={{paddingTop:"20vh"}} className="row m-0 d-flex justify-content-center text-center">
                <div  className="col"><h1 style={{ fontSize:"4rem", paddingBottom:"2rem"}}>Our Vision</h1> </div>
              </div>

              <div className="row d-flex justify-content-center text-center">
                <div className="col-4 justify-content-center text-end">
                  <div className="row justify-content-center text-center"><img className="iconsMain " src={icon1} alt='icon1'/></div>
                  <div className="row justify-content-center text-center"><p className="iconsText">Encourage everyone to follow their passion in content creation and gaming.</p></div>
                </div>
                <div className="col-4 text-center">
                  <div className="row justify-content-center text-center"><img className="iconsMain" src={icon2} alt='icon2'/></div>
                  <div className="row justify-content-center text-center"><p style={{color:"#1F8088"}} className="iconsText">Bridge the gap between talent and the companies. </p></div>
                </div>
                <div className="col-4 text-center">
                  <div className="row justify-content-center text-center"><img className="iconsMain" src={icon3} alt='icon3'/></div>
                  <div className="row justify-content-center text-center"><p className="iconsText">One stop destination for every influencer.</p></div>
                </div>
              </div>

          </div>

          <div style={{paddingTop:"20vh"}} className="row m-0 d-flex justify-content-center text-center">
            <div  className="col"><h1 style={{ fontSize:"4rem", paddingBottom:"2rem"}}>Influencers</h1> </div>
          </div>

          <div className="container">
              <div className="row d-flex justify-content-center align-items-end px-5 mt-5">
                <div className="col-lg-6">
                  <p style={{color:"#1F8088",fontSize:"1.2rem"}}   className="w-100 align-items-baseline"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                  ea commodo consequat. </p>
                </div>
                <div className="col-lg-2 mb-5 text-center">
                  <img src={inf1} alt="Influencers" className="rounded-circle w-100 " />
                </div>
              </div>
          </div>

          <div className="container mt-5 pb-0">
              <div className="row d-flex justify-content-center align-items-baseline">
                  <div className="col-lg-2 text-center">
                    <img src={inf2} alt="Influencers" className="rounded-circle w-100 " />
                  </div>
                  <div className="col-lg-4">

                    <div className="row d-flex">
                      <p style={{fontSize:"1.4rem",fontWeight:"700", color:"#1A1D32",letterSpacing:"2px"}} className="w-100 mb-0 ">Associated with</p>
                    </div>
                    <div className="row d-flex text-center ">
                      <p className="mb-0" style={{color:"#35C5D0", fontSize:"4rem",fontWeight:"600"}}>250+</p>
                    </div>
                    <div className="row d-flex text-end">
                      <p style={{fontFamily:"Scada",fontWeight:"600",color:"#007A73",fontSize:"2rem"}} className="mb-0">Influencers</p>
                    </div>
                  
                  
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src={inf3} alt="Influencers" className="rounded-circle w-100 mt-5" />
                  </div>
              </div>
          </div>

          <div style={{paddingTop:"20vh"}} className="row d-flex px-5 align-items-start ">
              <strong  style={{fontSize:"3.5rem", paddingBottom:"2rem"}} >Our Brand Success</strong>
              <p style={{color:"#1F8088",fontSize:"1.2rem"}} className="w-50 ">Influencer Marketing is a type of social media marketing that uses endorsements and 
              product mentions from influencers–individuals who have a dedicated social following and
               are viewed as experts within their niche. Influencer marketing works because of the high
                amount of trust that social influencers have built up with their following</p>
          </div>

          <div className="container w-50">
            <div className="row  d-flex">
              <p style={{fontSize:"1.5rem",fontWeight:"700", color:"#1A1D32",letterSpacing:"2px"}} className="w-100 mb-0 text-center">Assisted out</p>
            </div>
            <div className="row d-flex text-center ">
              <p className="mb-0" style={{color:"#35C5D0", fontSize:"5rem",fontWeight:"600"}}>6+</p>
            </div>
            <div  style={{fontFamily:"Scada",fontWeight:"600",color:"#007A73",fontSize:"2rem"}} className="row d-flex text-end">
              <p className="mb-0">Brands to Accomplish</p>
              <p>Their Target Market</p>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <img src={brandLogos} alt="Associated Brands"/>

          </div>

          <div className="row py-5 formRow">
                    <div  className="col-lg-6 col-sm-12 px-5 my-4 border-right-light">
                      <form className="form container ">
                        <h3 className="contactHeading">
                          <strong  style={{ fontSize: "3.5rem", paddingRight: "10px", color: "#c7c9cc"}}>/</strong>
                          Contact
                        </h3>
                        <div className="mb-3 itemBox form-group" controlId="formBasicName">
                          <input type="text" name="name" className="formItems form-control" placeholder="Name" required
                          />
                        </div>
                        <div className="mb-3 itemBox form-group" controlId="formBasicEmail">
                          <input className="formItems  message" type="email" placeholder="Enter email" required
                          />
                        </div>

                        <div className="mb-3 itemBox form-group" controlId="formBasicPassword">
                          <textarea name="career[message]" className="formItems  message" type="message" placeholder="Type your messsage"
                          ></textarea>
                        </div>
                        <button className="btn btn-outline-primary w-100" variant="primary" type="submit">
                          Submit
                        </button>
                      </form>
                    </div>
                    </div>
        {/* <div className="row greenbox"></div> */}
       
    </>
  );
};
export default LandingPage;
