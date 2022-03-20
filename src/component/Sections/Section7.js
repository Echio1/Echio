import React from "react"
import rocket  from '../../images/rocket.svg'
import "./section.css"


const Section7 = () => {
    return (
      <>
      <div className="cont">

        <div id="contact" style={{backgroundColor:"#fff", paddingTop:"3rem", paddingBottom:"4.4rem"}} className="row justify-content-center formRow px-0 mx-0">
            <div  className="col-lg-12 px-5 border-right-light">
            <form action="https://formsubmit.co/bfdce9e846db738c99e1c63b251f7d9b" method="POST">
                <h3 className="contactHeading">
                  <strong  style={{ fontSize: "3.5rem",fontWeight:"500", paddingRight: "10px", color: "#000"}}> Contact</strong>
                </h3>
                <div className="row mt-2 d-flex w-100">
                  <div className="col-lg-6 col-sm-12">
                      <div className="row d-flex">
                          <div className="col-lg-6 col-sm-12 mb-3 itemBox form-group" controlId="formBasicName">
                            <input type="text" name="first name" className="formItems form-control" placeholder="First Name" required/>
                          </div>
                          <div className="col-lg-6 col-sm-12 mb-3 itemBox form-group" controlId="formBasicName">
                            <input type="text" name="last name" className="formItems form-control" placeholder="Last Name" required/>
                          </div>
                      </div>

                      <div className="row d-flex">
                          <div className="col-lg-6 my-2 itemBox form-group " controlId="formBasicEmail">
                            <input className="message form-control formBorder" type="subject" name="Subject" placeholder="Subject" required/>
                          </div>
                          <div className="col-lg-6 my-2 itemBox form-group " controlId="formBasicEmail">
                            <input className="message form-control formBorder" type="phone" name="Phone Number" placeholder="Phone Number" />
                          </div>
                      </div>
                  </div>
                    
                    <div className="col-lg-6 col-sm-12 mb-3 itemBox form-group" controlId="formBasicPassword">
                      <div className="row d-flex">
                          <div className="col-12 mb-3  itemBox form-group " controlId="formBasicEmail">
                            <input className="message form-control formBorder" type="email" name="Email" placeholder="Enter email" required/>
                          </div>
                      </div>
                      <textarea name="Message" className="message form-control" type="message" placeholder="Type your messsage">
                      </textarea>
                    </div>

                </div>


              
                <button className="btn btn-outline-primary w-100 message-btn" variant="primary" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div style={{background:"#fff"}} className="row d-flex justify-content-center ">
            <div style={{zIndex:"10"}} className="d-flex w-75 text-center justify-content-center rounded-top grad ">
                <div className="row pt-3 px-3 d-flex align-items-center content-to-hide">
                  <div className="col-2 content-to-hide">
                    <img style={{height:"52px"}} src={rocket} alt="rocket"/>
                  </div>
                  <div className="col-2 content-to-hide">
                    <p style={{fontSize:"1rem", color:"#fff"}}>Start your Journey Now with Us!</p>
                  </div>

                </div>
            </div>
          </div>
      </div>
      </>
    );
};

    export default Section7;