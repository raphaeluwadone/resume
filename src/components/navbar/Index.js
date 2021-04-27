import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

function Navbar({toggle}) {
    return (
        <>
         <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Rafaelo
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'>
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'>
                            Contact
                        </NavLinks>
                    </NavItem>

                </NavMenu>
                
            </NavbarContainer>
         </Nav>   
        </>
    )
}

export default Navbar
