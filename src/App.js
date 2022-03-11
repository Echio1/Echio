import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import main from "../src/images/Frame586.svg";

// import NavBar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import LandingPage from './component/Sections/landingPage';
import Team from './component/Team/team';
import Cards from './component/Cards/cards';

function App() {
  return (
    <Router>
      <section id="home" className='py-0' style={{width: "100%",backgroundImage: `url(${main})`,backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
        <Routes>
          <Route path='/team'  element={<Team/>}/>
        </Routes> 
        <LandingPage/>
        <Footer/>
        
      </section>
     </Router>
  );
}

export default App;
