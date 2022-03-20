import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6 ";
import Section7 from "./Section7";


import main from "../../images/Frame586.svg";
import { render } from "@testing-library/react";
import { Fade } from "react-reveal";

const LandingPage = () => {

    return (
      <> 
     <section id="home" className='py-0' style={{width: "100%",backgroundImage: `url(${main})`,backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
       <NavBar/>
          <Fade >
          <Section1/>
          </Fade>
          {/******************** Our Vision ********************/}
          <Fade bottom>
          <Section2/>
          </Fade>
          {/******************** Influencers Section ********************/}
          <Fade bottom>
          <Section3/>
          </Fade>
          {/******************* Brand Stat Section ****************** */}
          <Fade bottom>
          <Section4/>
          </Fade>
          {/****************** Gaming Brand *****************/}
          <Fade bottom>
          <Section5/>
          </Fade>
          {/********************* Clients Testimony *********************/}
          <Fade bottom>
          <Section6/>
          </Fade>
          {/******************** Contact us Form ********************/}
          <Section7/>
        <Footer/>
        </section>
    </>
  );
  }
export default LandingPage;
