import React from 'react';
import { FaBars} from 'react-icons/fa';
import { GiComputerFan } from 'react-icons/gi';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon, 
  NavMenu,
  NavItem,
  NavLinks,  
  NavBtn, 
  NavBtnLink 
} from './NavBarElements'

const NavBar = ({ toggle }) => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" id="nav-link"><span id="fanIcon"><GiComputerFan/></span> Technigram</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/" id="nav-link">News</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/builds" id="nav-link">Builds</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/discussions" id="nav-link">Discussions</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/signup" id="nav-link" style={{ display: 'none' }}>Sign Up</NavLinks>
              </NavItem>
            </NavMenu> 
            <NavBtn>
              <NavBtnLink  id="nav-link">Sign Out</NavBtnLink>
            </NavBtn>
          </NavbarContainer>  
        </Nav>
    </>
  )
}

export default NavBar;