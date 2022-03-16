import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component/Sections/style.css";
import "./component/Sections/section.css";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



// import Footer from './component/Footer/Footer';
import Team from './component/Team/team';


// import NavBar from './component/Navbar/Navbar';

// import Section1 from './component/Sections/Section1';
// import Section2 from './component/Sections/Section2';
// import Section3 from './component/Sections/Section3';
// import Section4 from './component/Sections/Section4';
// import Section5 from './component/Sections/Section5';
// import Section6 from './component/Sections/Section6 ';
// import Section7 from './component/Sections/Section7';
import LandingPage from './component/Sections/landingPage';



function App() {
  return (
    <Router>
     
        <Routes>
          <Route path='/'  exact element={<LandingPage/>}/>
          <Route path='/team'  element={<Team/>}/>
        </Routes>

     </Router>
  );
}

export default App;
