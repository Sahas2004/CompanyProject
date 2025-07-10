import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';

import Home from './pages/Home';
// import WhoWeAre from './pages/Job';
// import OurVision from './pages/about/OurVision';
// import Consulting from './pages/whatWeDo/Consulting';
// import Technology from './pages/whatWeDo/Technology';
  import Leadership from './pages/Candidate';
// import WhoWeHelp from './pages/WhoWeHelp';
import ContactUs from './pages/ContactUs';
import WhatWeDo from './pages/WhatWeDo';
import Candidate from './pages/Candidate';
import AboutUs from './pages/AboutUs';
import Job from './pages/Job';
import ScrollToTop from './components/ScrollToTop';
import RegisterForm from './components/RegisterForm'; 


  
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <NavbarComponent />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutUs />} />

        <Route path="/jobs" element={<Job />} />
        <Route path="/candidate" element={<Candidate />} />
       
       <Route path="/What-We-Do" element={<WhatWeDo />} />
        
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/RegisterForm" element={<RegisterForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
