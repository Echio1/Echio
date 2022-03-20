import React from "react"
import './teamStyle.css'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
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
                            <h2 style={{}}>{props.Head}<br/><span style={{color:"#35C5D0", letterSpacing:"1px"}}>{props.Title}</span></h2>
                            <div className="social-icons">
                            <hr style={{width:"20%"}}/>
                                    <a href="#facebook" ><BsFacebook size={"15px"}/></a>
                                    <a href="#insta" ><BsInstagram   size={"15px"}/></a>
                                    <hr style={{width:"20%"}}/>
                            </div>

                        </div>
                    </div>
                </div>
        </>
    );
}

export default SlideCards;