import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import { MenuItems } from '../Navbar/MenuItems';

const SideBar = (props) => {
    const { isOpen, toggle } = props;

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    {MenuItems.map(item => {
                        return (
                            <SidebarLink to={item.link} onClick={toggle}>
                                {item.name}
                            </SidebarLink>
                        );
                    })}
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default SideBar;