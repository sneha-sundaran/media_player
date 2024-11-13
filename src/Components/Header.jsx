import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

// .logo{
//   font-size: 35px;
//   color:  rgb(27, 107, 100);
//   font-family: "Dancing Script", serif;
// }
function Header() {
  return (
    <Navbar className="bg-white">
    <Container>
      <Navbar.Brand href="#home">
        
    <Link to={'/'} style={{textDecoration:'none',fontWeight:'bold',fontSize:'27px'}} className='logo'>  <i className='bx bx-music'></i>  <span style={{fontFamily:'"Dancing Script","serif"',fontWeight:'bold',fontSize:'27px'}}> Music Player</span></Link>

   
      
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header