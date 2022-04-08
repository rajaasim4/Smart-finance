import React from 'react';

import './App.css'
import Banner from './Components/Banner';
import Features from './Components/Features';
import Navbar from './Components/Navbar';
import Partner from './Components/Partner';
import Presale from './Components/Presale';
import Roadmap from './Components/Roadmap';
import Team from './Components/Team';
import Vision from './Components/Vision';
import Footer from './Components/Footer'
const App=()=>{
    return(
        <>
        <Navbar/>
        <Banner/>
        <Vision/>
        <Features/>
        <Roadmap/>
        <Presale/>
        <Team/>
        <Partner/>
        <Footer/>
        
        
        </>
    )
}
export default App;
