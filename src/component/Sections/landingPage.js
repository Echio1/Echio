// import { Container } from "react-bootstrap";
import "./style.css";
import row1img from "../../images/pg1img1.svg"
import row3img from "../../images/pg1img2.svg"
import inf1 from "../../images/inf1.jpeg"
import inf2 from "../../images/inf2.jpeg"
import inf3 from "../../images/inf3.jpeg"
import brandLogos from "../../images/brandLogos.svg"
import pg4img1 from '../../images/pg4img1.svg'



import { Button } from "react-bootstrap";
import NavBar from "../Navbar/Navbar";

import icon1 from '../../images/pg2star.svg'
import icon2 from '../../images/pg2link.svg'
import icon3  from '../../images/pg2tick.svg'
import clientB  from '../../images/clientB.svg'

import client1  from '../../images/client1.png'
import client2  from '../../images/client2.png'
import client3  from '../../images/client3.png'
import client4  from '../../images/client4.png'

import rocket  from '../../images/rocket.svg'

import QCards from "../QuoteCards/qCards";

const LandingPage = () => {
  return (
    <> 
       <NavBar/>
          <div className="container justify-content-center">
            <div className="row d-flex justify-content-center align-items-center m-0 my-5 py-5">
            <h1 className="w-50 text-center" style={{overflowY: "hidden"}}>
                  "There are <mark className="diffColor">exceptional</mark> people
                  out there who are capable of starting
                  <mark className="diffColor">epidemics</mark>. All we have to do is{" "}
                  <mark className="diffColor">find</mark> them."
                </h1>
              {/* <div className="d-none d-md-block col-md-5 d-flex align-items-center justify-content-end">
                <img src={row1img} alt="notebook png"  style={{width:"90%"}}/>
              </div> */}
            </div>

            <div className="row d-flex">
              <div className="mb-5 mailHolder">
              {/* <input placeholder="Enter your email" className="mailPara"></input> */}
                <Button className=" mailButton">Get Started</Button>
              </div>
            </div>

          </div>
          

          <div className="row d-flex  justify-content-end">

              {/* <div className="col-lg-2 ">
                <h3></h3>
              </div>
              <div className="col-2"></div>
              <div className="col-2"></div> */}
              <div className="col-4">
                <img src={row3img} alt="our clients" />
              </div>
          </div>

          <div id="vision" className="container">
              <div  className="row pt-5 mt-4 m-0 d-flex justify-content-center text-center">
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
{/******************** Influencers Section ********************/}

          <div id="influ" className="row pt-5 mt-4 m-0 d-flex justify-content-center text-center">
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
{/******************* Brand Stat Section ****************** */}
          <div style={{paddingTop:"20vh", backgroundImage: `url(${pg4img1})`,backgroundSize: "cover",backgroundRepeat: "no-repeat"}} className="row d-flex px-5 align-items-start ">
              <strong className="text-center"  style={{fontSize:"3.5rem", paddingBottom:"2rem"}} >Our Brand's Success</strong>
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

{/****************** White background brand img *****************/}

          <div className="row d-flex align-items-center w-100 px-0 mx-0 mb-4">
            <img src={brandLogos} alt="Associated Brands"/>
          </div>
{/********************* Clients Testimony *********************/}
          <div id="test" className="my-5"  style={{backgroundImage: `url(${clientB})`,paddingTop:"4.2rem", paddingBottom:"4.2rem"}}>
            <div className="row pt-5 mt-4 px-4 d-flex justify-content-center">
              <p className="my-5" style={{fontSize:"3rem",fontWeight:"800",color:"#E3FEF9"}}>What Our Clients Says</p>
            </div>
            <div className="row  px-4 d-flex justify-content-center">
              <div className="col-3">
                <QCards Source={client1} Head="Angela" Text="Its been a great journey, Echio is a brand you can trust "/> 
              </div>
              <div className="col-3">
                <QCards Source={client2} Head="Mark" Text="Its been a great journey, Echio is a brand you can trust "/> 
              </div>
            </div>
            <div className="row mb-5  px-4 d-flex justify-content-center">
              <div className="col-3">
                <QCards Source={client3} Head="Bruce" Text="Its been a great journey, Echio is a brand you can trust "/> 
              </div>
              <div className="col-3">
                <QCards Source={client4} Head="Kety" Text="Its been a great journey, Echio is a brand you can trust "/> 
              </div>
            </div>
          </div>
{/******************** Contact us Form ********************/}
          <div id="contact" style={{backgroundColor:"#fff"}} className="row justify-content-center py-5 mb-4 formRow">
            <div  className="col-lg-12 px-5 my-4 border-right-light">
              <form className="form container ">
                <h3 className="contactHeading">
                  <strong  style={{ fontSize: "3.5rem",fontWeight:"500", paddingRight: "10px", color: "#000"}}> Contact</strong>
                </h3>
                <div className="row mt-5 d-flex w-100">
                  <div className="col-lg-6 col-sm-12">
                      <div className="row d-flex">
                          <div className="col-lg-6 col-sm-12 mb-3 itemBox form-group" controlId="formBasicName">
                            <input type="text" name="name" className="formItems form-control" placeholder="First Name" required/>
                          </div>
                          <div className="col-lg-6 col-sm-12 mb-3 itemBox form-group" controlId="formBasicName">
                            <input type="text" name="name" className="formItems form-control" placeholder="Last Name" required/>
                          </div>
                      </div>

                      <div className="row d-flex">
                          <div className="col-12 mb-3 mt-4 itemBox form-group " controlId="formBasicEmail">
                            <input className="message form-control formBorder" type="email" placeholder="Enter email" required/>
                          </div>
                      </div>
                  </div>
                    
                    <div className="col-lg-6 col-sm-12 mb-3 itemBox form-group" controlId="formBasicPassword">
                  <textarea name="career[message]" className="message form-control" type="message" placeholder="Type your messsage"
                  ></textarea>
                </div>

                </div>


              
                <button className="btn btn-outline-primary w-100 message-btn" variant="primary" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div style={{position:"absolute" ,top:"615vh", zIndex:"10"}} className="d-flex w-75 text-center justify-content-center rounded grad mb-2">
                <div className="row p-3 d-flex align-items-center">
                  <div className="col-2">
                    <img style={{height:"52px"}} src={rocket} alt="rocket"/>
                  </div>
                  <div className="col-2">
                    <p style={{fontSize:"1rem", color:"#fff"}}>Start your Journey Now with Us!</p>
                  </div>

                </div>
            </div>
          </div>

       
    </>
  );
};
export default LandingPage;
