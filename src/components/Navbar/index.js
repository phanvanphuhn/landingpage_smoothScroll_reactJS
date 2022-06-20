import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { MenuItems } from './MenuItems';

const Navbar = (props) => {
    const { toggle } = props;

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Bitcoin100k
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        {MenuItems.map(item => {
                            return (
                                <NavItem>
                                    <NavLinks to={item.link}>{item.name}</NavLinks>
                                </NavItem>
                            );
                        })}
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;