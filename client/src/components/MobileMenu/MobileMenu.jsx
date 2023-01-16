import React from 'react';
import { 
    MenuContainer, 
    CloseIcon, 
    Icon, 
    MobileWrapper, 
    MobileDropdown, 
    MobileLink, 
    MobileBtnWrapper, 
    MobileRoute 
} from './MobileMenuElements';


const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MenuContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <MobileWrapper>
            <MobileDropdown>
                <MobileLink to="/" onClick={toggle}>News</MobileLink>
                <MobileLink to="/builds" onClick={toggle}>Builds</MobileLink>
                <MobileLink to="/discussions" onClick={toggle}>Discussions</MobileLink>
                <MobileLink to="/signup" onClick={toggle} style={{ display: 'none' }}>Sign Up</MobileLink>
            </MobileDropdown>
            <MobileBtnWrapper>
                <MobileRoute onClick={toggle}>Sign Out</MobileRoute>
            </MobileBtnWrapper>
        </MobileWrapper>
    </MenuContainer>
  )
}

export default MobileMenu;