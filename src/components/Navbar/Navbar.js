import React, {useState} from 'react'
import { Nav, NavBarContainer, NavLogo, NavIcon,MobileIcon} from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {

 const [click, setClick] = useState(false)

 const handleClick = () => setClick(!click);

  
  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
          <Nav>
            <NavBarContainer>
                <NavLogo to='/'>
                    <NavIcon />
                        CLINIC
                </NavLogo>
                <MobileIcon
                  onClick = {handleClick}
                >
                  { click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
            </NavBarContainer>
          </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
