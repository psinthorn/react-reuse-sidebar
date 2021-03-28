import styled from '@emotion/styled';
// import { FaRegIdBadge } from 'react-icons/fa';

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
    transition: .3s ease-in all;
`

export const SideBarBrandContainer = styled.div`
        position: absolute;
        text-align: ${props => !props.isSidebarOpen && 'center'};
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
        transition: .5s ease-in all;      
`

export const MenuItemContainer = styled.div`
        position: absolute;
        width: 100%;
        top: 10%;
        left: 0;
        right: 0;
        margin: 0 auto; 
        transition: .5s ease-in all;
`

export const MenuItems = styled.div`
    font-family: ${props => props.font};
    ${props => !props.isSidebarOpen && `text-align: center; ${props.selected && ''} background: rgba(0, 0, 0, 0.6)`};
    width: 100%;
    color: ${props => props.selected ? 'rgba(255, 112,85, 0.8)' : 'rgba(255, 255, 255, 1.0)'};
    white-space: nowrap;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1rem 0 1rem 0;
    transition: .5s ease-in all;

    // -----------------------------------------------------------------
    // if need to show higtlight of of sidebarisopn state 
    // ${props => props.selected && 'background: rgba(0, 0, 0, 0.6)'};
    // -----------------------------------------------------------------

    :hover {
        color: rgba(255, 112,85, 0.8);
        transition: .1s ease-in all;
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
export const MenuItemsWrapper = styled.div`
    left: 0;
    right: 0;
    margin: 0 auto; 
    width: 80%;

    &:after {
        content: '';
        display: block;
        border-top: 1px solid ${props => props.selected ? 'rgba(255, 112,85, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
       
    }
`

export const Icon = styled.span`
        display: inline;
        vertical-align: middle;
        padding: ${props => props.isSidebarOpen &&  '1rem 1rem 0 0rem'};
        text-align: ${props => !props.isSidebarOpen && 'center'};
        width: 80%;
        font-size: 1.3rem;
        // transition: .8s ease-in all;
`

export const Text = styled.span`
       
        display: ${props => props.isSidebarOpen ? 'inline' : 'none'};
        vertical-align: middle;
        width: 80%;
        white-space: nowrap;
        padding: 1rem 0 0rem 0;
        transition: .8s ease-in all;  
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
        cursor: pointer;
        transition: .3s ease-in all;

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