import React,{useState} from 'react'
import '../Stylesheet/Navbar.css'
import logo from '../Images/Logo.png'
import { FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
    const [show,sethide]=useState(false);
    // const sho=()=>{
    //     alert('clcked');
    // }
  return (
   <nav className={show?'Navbar navheight':'Navbar  '}>
       <div className="logo">
           <img src={logo} alt="" />
       </div>
       {/* <div > */}
           <ul className={show?"nav navshow":"nav"}>
               <li><ScrollLink to="Vision">Vision</ScrollLink></li>
               <li><ScrollLink to="Features">Features</ScrollLink></li>
               <li><ScrollLink to="Roadmap">Roadmap</ScrollLink></li>
               {/* <li><ScrollLink to="Tokenmics">Tokenomics</ScrollLink></li> */}
               <li><ScrollLink to="Presale">Presale</ScrollLink></li>
               <li><ScrollLink to="Team">Team</ScrollLink></li>
               <li><ScrollLink to="Partner">Partner</ScrollLink></li>
               <li><ScrollLink to="Footer">Audit</ScrollLink></li>
           </ul>
       {/* </div> */}
       <div className="buttons">
           <button>Whitepaper</button>
           <button>App</button>
       </div>
       {/* <div className="humburger" onClick={sho}> */}
       <div className="humburger" onClick={()=>sethide(!show)}>
           <button><FaBars/></button>
       </div>
   </nav>
  )
}

export default Navbar