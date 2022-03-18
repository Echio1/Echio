import React from "react"
import './teamStyle.css'

import {BsFacebook, BsInstagram,BsTwitter,BsGithub} from "react-icons/bs"


function SlideCards(props){
    return(
        <>
            <div className="card d-flex  justify-content-center text-align-center">
                    <div className="imgBox rounded">
                    <img className="rounded" src={props.Img1} alt="CEO"/> 
                    <img  className="rounded" src={props.Img2} alt="CEO"/> 
                    </div>
                    <div className="details d-flex justify-content-center align-items-center">
                        <div className="content">
                            <h2>{props.Head}<br/><span style={{color:"#35C5D0"}}>{props.Title}</span></h2>
                            <div className="social-icons">
                                    <a href="#facebook" ><BsFacebook/></a>
                                    <a href="#insta" ><BsInstagram/></a>
                                    <a href="#twitter" ><BsTwitter/></a>
                                    <a href="#github"><BsGithub/></a>
                            </div>

                        </div>
                    </div>
                </div>
        </>
    );
}

export default SlideCards;