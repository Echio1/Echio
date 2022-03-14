import React from "react"
import rocket  from '../../images/rocket.svg'


const Section7 = () => {
    return (
      <>
        <div id="contact" style={{backgroundColor:"#fff", paddingTop:"3.8rem", paddingBottom:"4.4rem"}} className="row justify-content-center formRow">
            <div  className="col-lg-12 px-5 border-right-light">
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
            <div style={{position:"absolute" ,top:"660vh", zIndex:"10"}} className="d-flex w-75 text-center justify-content-center rounded grad mb-2">
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

    export default Section7;