import React, {useState} from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles'
import { 
  Nav, 
  NavBarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtnLink, 
  NavItemBtn,
} from './Navbar.elements'


const Navbar = () => {

 const [click, setClick] = useState(false)
 const [button, setButton] = useState(true)



 const handleClick = () => setClick(!click);

 const showButton = () => {
  if (window.innerWidth <= 960) {
    setButton(false);
  } else {
    setButton(true);
  }
 }

 window.addEventListener('resize', showButton);
  
  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
          <Nav>
            <NavBarContainer>
                <NavLogo to='/'>
                    <NavIcon />
                    Kim Clemence Dental Center
                </NavLogo>
                <MobileIcon
                  onClick = {handleClick}
                >
                  { click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}> 
                  <NavItem>
                    <NavLinks to='/'>Home</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/about'>About Us</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/services'>Services</NavLinks>
                  </NavItem>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to='/book-appointment'>
                        <Button primary> Book Now</Button>
                      </NavBtnLink>
                    ): (
                      <NavBtnLink to ='/book-appointment'>
                        <Button fontBig primary> Book Appointment </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                </NavMenu>
            </NavBarContainer>
          </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
