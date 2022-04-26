import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'
import Contact from './Contact'
// import Payment1 from './Payment1';
// import Payment2 from './Payment2';
// import Payment3 from './Payment3';
// import Schedule1 from './Schedule1';
// import Schedule2 from './Schedule2';
import T_C from './T_C';
// import PickUp from './PickUp';
import Relocation from './Relocation';
import AboutUs from './AboutUs'
import NavBar from './NavBar';
import FAQ from './FAQ';
function App() {
  return (
    <Router>
      <>
        <NavBar />
        
      </>
       <Routes>
       <Route path="/" element={<HomePage/>} exact/>
       
       <Route path="/Relocation" element={<Relocation/>} />
       <Route path="/AboutUs" element={<AboutUs/>} />
       <Route path="/Contact" element={<Contact/>} />
       <Route path="/FAQ" element={<FAQ/>} />
       <Route path="/T_C" element={<T_C/>} />
       </Routes>    
    </Router>
  );
}

export default App;
