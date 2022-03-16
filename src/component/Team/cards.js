import React from "react"
import './teamStyle.css'

import {BsFacebook, BsInstagram,BsTwitter,BsGithub} from "react-icons/bs"
import { propTypes } from "react-bootstrap/esm/Image";


function SlideCards(props){
    return(
        <>
            <div className="card">
                    <div className="imgBox">
                    <img src={props.Img1} alt="CEO"/> 
                    <img src={props.Img2} alt="CEO"/> 
                    </div>
                    <div className="details w-100 d-flex justify-content-center align-items-center">
                        <div className="content d-flex justify-content-center align-items-center">
                            <h2 style={{lineHeight:"1rem"}} className="text-center">{props.Head}<br/><span style={{color:"#35C5D0",fontSize:"0.8rem"}}>{props.Title}</span></h2>
                            <div className="social-icons d-flex mt-4 ">
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