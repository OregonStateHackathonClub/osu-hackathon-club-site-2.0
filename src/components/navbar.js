import React from 'react';
import { Link } from 'react-router-dom';
import RightJellyBean from '../images/RightJellyBean.png'; 

function Navbar() {
    return (
      <nav id="navbar">
        <ul> 
          <li> <img src={RightJellyBean} id="navbarJellyBean" alt="Jelly Bean Facing Right"/> </li>
          <li id='beaverhacks'>beaverhacks</li> 
          <div id="navbarlinks">  
            <li><Link to="/"> events</Link></li>
            <li><Link to="/about">about</Link></li> 
            <li><Link to="/archive">archive</Link></li>
          </div> 
        </ul>

      </nav>
    );
  }
  
  export default Navbar;