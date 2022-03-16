import React from "react"

// import "./section.css"

import pg1img1 from "../../images/pg1img1.svg"
import pg1img2 from "../../images/pg1img2.svg"
import pg1img3 from "../../images/pg1img3.svg"


const Section1 = () => {
    return (
      <>
        <div className="sec w-100 justify-content-center p-0 m-0 ">
        {/* 1st Row */}
            <div className="row d-flex w-100 justify-content-center align-items-center m-0 my-1 ">
                <div className="col-lg-6 col-sm-12">
                    <div className="d-flex justify-content-center">
                        <h1 className="w-75 " style={{overflowY: "hidden"}}>
                            "There are <mark className="diffColor">exceptional</mark> people
                            out there who are capable of starting
                            <mark className="diffColor">epidemics</mark>. All we have to do is{" "}
                            <mark className="diffColor">find</mark> them."
                        </h1>
                        </div>
                    </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="w-100 d-flex justify-content-center">
                        <img style={{width:"70%"}} className="pt-5" src={pg1img1} alt="our clients" />
                    </div>
                </div>
                
            </div>

        {/* 2nd Row */}
            <div className="row d-flex  justify-content-center">
              <div className="col-lg-5 col-sm-6">
                <div style={{width:"85%"}} className="">
                    <img src={pg1img2} alt="vector1"/>
                </div>
              </div>
              <div className="col-lg-5 col-sm-6 ">
                <div className="container d-flex justify-content-end align-item-center w-75 text-end me-1">
                    <img src={pg1img3} alt="vector1"/>  
                </div>
              </div>
            </div>
          </div>
      </>
    );
};

    export default Section1;