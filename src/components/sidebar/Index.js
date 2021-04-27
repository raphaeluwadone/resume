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
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='project' onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
