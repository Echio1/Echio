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

const LandingPage = () => {
  return (
    <> 
     <section id="home" className='py-0' style={{width: "100%",backgroundImage: `url(${main})`,backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
       <NavBar/>
          <Section1/>
          {/******************** Our Vision ********************/}
          <Section2/>
          {/******************** Influencers Section ********************/}
          <Section3/>
          {/******************* Brand Stat Section ****************** */}
          <Section4/>
          {/****************** Gaming Brand *****************/}
          <Section5/>
          {/********************* Clients Testimony *********************/}
          <Section6/>
          {/******************** Contact us Form ********************/}
          <Section7/>
        <Footer/>
        </section>
    </>
  );
};
export default LandingPage;
