import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component/Sections/style.css";
import "./component/Sections/section.css";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import main from "../src/images/Frame586.svg";

import Footer from './component/Footer/Footer';
import Team from './component/Team/team';


import NavBar from './component/Navbar/Navbar';

import Section1 from './component/Sections/Section1';
import Section2 from './component/Sections/Section2';
import Section3 from './component/Sections/Section3';
import Section4 from './component/Sections/Section4';
import Section5 from './component/Sections/Section5';
import Section6 from './component/Sections/Section6 ';
import Section7 from './component/Sections/Section7';



function App() {
  return (
    <Router>
      <section id="home" className='py-0' style={{width: "100%",backgroundImage: `url(${main})`,backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
        <Routes>
          <Route path='/team'  element={<Team/>}/>
        </Routes> 
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
     </Router>
  );
}

export default App;
