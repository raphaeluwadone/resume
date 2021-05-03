import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper, SideBtnWrap } from './SidebarElements'


function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                            onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='tools' 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                            onClick={toggle}>
                        Tools
                    </SidebarLink>
                    <SidebarLink to='project'                             
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                            onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='contact'                             
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                            onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
