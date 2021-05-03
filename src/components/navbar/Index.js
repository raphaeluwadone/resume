import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

function Navbar({toggle}) {
    return (
        <>
         <Nav>
            <NavbarContainer>
                <NavLogo to="hero"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                >
                    Rafaelo
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                        >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='tools'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                        >
                            Tools
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                        >
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                        >
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
