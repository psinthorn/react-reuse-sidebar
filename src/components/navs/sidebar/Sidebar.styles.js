import styled from '@emotion/styled';
import { FaRegIdBadge } from 'react-icons/fa';

export const SidebarContainer = styled.div`
    position: relative; // for menu and toggle container
    width: ${props => props.isSidebarOpen ? '20%' : '5%'};
    max-width: 280px;
    min-width: 80px;
    color: #fff;
    background-image: linear-gradient(
        315deg, 
        rgba(0, 0, 0,0.7)10%, 
        rgba(255,255,255,0.8)90%),
        url(${props => props.bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

export const SideBarBrandContainer = styled.div`
        position: absolute;
        width: 100%;
        top: 10px;
        left: 0;
        right: 0;
        margin: 0 auto; 
`

export const SidebarBrand = styled.div`
        position: absolute;  
        font-family: ${props => props.font};
        font-size: 2rem;
        width: 80%;
        // top: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;       
`

export const MenuItemContainer = styled.div`
        position: absolute;
        width: 100%;
        top: 10%;
        left: 0;
        right: 0;
        margin: 0 auto; 
`

export const MenuItems = styled.div`
    font-family: ${props => props.font};
    width: 80%;
    color: ${props => props.selected ? 'rgba(255, 112,85, 0.8)' : 'rgba(255, 255, 255, 1.0)'};
    left: 0;
    right: 0;
    margin: 0 auto;

    :hover {
        color: rgba(255, 112,85, 0.8);
        transition: .1s ease-in all;
    }

    &:after {
        content: '';
        display: block;
        border-top: 1px solid ${props => props.selected ? 'rgba(255, 112,85, 0.8)' : 'rgba(255, 255, 255, 1.0)'};
        margin: 1rem 0 0.5rem 0;
    }

    ${props => !props.selected && `
        &:hover {
            &:after {
                border-top: 1px solid rgba(255, 112,85, 0.4);
                transition: .1s ease-in all;
            }
        }
    `}
`

export const Icon = styled.span`
        padding: 2rem 1rem 0 0;
`

export const Text = styled.span`
        display: inline;
`

// Toggeler ------------------------------------------------------------------------------
export const MenuToggleContainer = styled.div`
        position: absolute;
        width: 100%;
        bottom: 10%;
        left: 0;
        right: 0;
        margin: 0 auto;
`
export const MenuToggle = styled.div`
        position: relative; // for horizontal line 
        height: 40px;
        width: 100%;
        left: 0;
        right: 0;
        margin: 0 auto;
        min-width: 40px;
        // border-top: 1px solid #fff;
        cursor: pointer;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: .25em;
            height: .1em;
            width: 20%;
            min-width: 40px;
            background: #fff;
            box-shadow:
                0 .75em 0 0 #fff,
                0 1.5em 0 0 #fff;
        }
`