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
        rgba(255, 255, 255,0.5)10%, 
        rgba(0,0,0,0.9)90%),
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
        transition: .3s ease-in all;      
`

export const MenuContainer = styled.div`
        position: absolute;
        width: 100%;
        top: 10%;
        left: 0;
        right: 0;
        margin: 0 auto; 
        transition: .3s ease-in all;
`

export const MenuItemContainer = styled.div`
        ${props => !props.isSidebarOpen && `text-align: center; ${props.selected && ''} background: rgba(0, 0, 0, 0.6)`};
        width: 100%;
        top: 10%;
        left: 0;
        right: 0;
        padding-bottom: .5rem;
        margin-top: .5rem;
        transition: .3s ease-in all;
`

export const MenuItems = styled.div`
    font-family: ${props => props.font};
    width: 100%;
    color: ${props => props.selected ? 'rgba(255, 112,85, 0.8)' : 'rgba(255, 255, 255, 1.0)'};
    white-space: nowrap;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1rem 0 .5rem 0;
    transition: .3s ease-in all;

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
    position: relative; // for dropdown icon
    left: 0;
    right: 0;
    margin: 0 auto; 
    width: 80%;

    &:hover {
        color: rgba(255, 112,85, 0.8);
        transition: .1s ease-in all;
    }

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
        transition: .3s ease-in all;
`

export const Text = styled.span`
       
        display: ${props => props.isSidebarOpen ? 'inline' : 'none'};
        vertical-align: middle;
        width: 80%;
        white-space: nowrap;
        padding: 1rem 0 0rem 0;
        transition: .3s ease-in all;  
`

export const DropdownIcon = styled.span`
        position: absolute;
        border: solid ${props => props.selected ? 'rgba(255, 112,85, 0.8)' : 'rgba(255, 255, 255, 1.0)'};
        border-width: 0 1px 1px 0;
        padding: 3px;
        top: 24px;
        right: .1rem;
        transform:  rotate(45deg);

        :hover {
        border: solid rgba(255, 112,85, 0.8);
        border-width: 0 1px 1px 0;
        padding: 3px;
        top: 24px;
        right: .1rem;
        transform:  rotate(45deg);
        transition: .1s ease-in all;
    }
`

//  Submenu Items ---------------------------------------------------------------------------
export const SubMenuContainer = styled.div`
    // position: absolute;
    // background-color: #eee;
    padding-bottom: 2rem;
    width: 100%;
    left: 0;
    top: 0;
    margin: 0 auto;  
`

export const SubMenuWrapper = styled.div`
    ${props => props.isSidebarOpen ? 'text-align: right;' : 'text-align: right;' }
    width: 90%;
    font-size: 14px;

    &:hover {
        color: rgba(255, 112,85, 0.8);
        transition: .1s ease-in all;
    }

    /* &:after {
        content: '';
        display: block;
        border-top: 1px solid ${props => props.selected ? 'rgba(255, 112,85, 0.8)' : 'rgba(255, 255, 255, 0.8)'};     
    } */
`

export const SubmenuItem = styled.div`
    color: rgba(255,255, 255,1);
     &:hover {
        color: rgba(255, 112,85, 0.8);
        transition: .1s ease-in all;
    }


`

export const ArrowIcon = styled.span`
        //position: absolute;
        border: solid ${props => props.selected ? 'rgba(255, 112,85, 0.8)' : 'rgba(255, 255, 255, 1.0)'};;
        border-width: 0 1px 1px 0;
        padding: 3px;
        top: 24px;
        right: .1rem;
        transform:  rotate(45deg);

        :hover {
        border: solid rgba(255, 112,85, 0.8);
        border-width: 0 1px 1px 0;
        padding: 3px;
        top: 24px;
        right: .1rem;
        transform:  rotate(45deg);
        transition: .1s ease-in all;
    }
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
        transition: .5s ease-in all;

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