import React from 'react'
import { Nav, NavBarContainer} from './Navbar.elements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavBarContainer>
                <NavLogo to='/'>
                    <NavIcon />
                        CLINIC
                </NavLogo>
            </NavBarContainer>
        </Nav>
    </>
  )
}

export default Navbar
