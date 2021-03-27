import {useState} from 'react';
import {FaCompass} from 'react-icons/fa';
import * as s from './Sidebar.styles';

const Sidebar = (props) => {

    const {
        brand = '', 
        bgImg = '',
        menuItems=[],
        fonts = {
            brand: '',
            menu: ''
        }
    } = props; 

     // state for selected menu
     const [menuSelected, setMenuSelected] = useState(menuItems[0].name)

     // Toggle sidebar
     const [isSidebarOpen, setSidebarState] = useState(true)

     // handle menu item on click
     const handleMenuItemOnClick = (menuName) => {
        setMenuSelected(menuName)
     }

    // loop menu items
    const menuItemsJSX = menuItems && menuItems.map((menu, i) => {
            const isMenuItemSelected = menuSelected === menu.name
            //console.log(`${menu.name} is selected ${isMenuItemSelected}`)
            return (
                <s.MenuItems 
                key={i} 
                font={fonts.menu}
                selected={isMenuItemSelected}
                onClick={()=>{handleMenuItemOnClick(menu.name)}}
                >
                    <s.Icon><FaCompass /></s.Icon>
                    <s.Text>{menu.name}</s.Text>
                    
                </s.MenuItems>
                )
    })

    return (
        <s.SidebarContainer bgImg={bgImg} isSidebarOpen={isSidebarOpen}>
            <s.SideBarBrandContainer>
                <s.SidebarBrand font={fonts.brand}>{brand}</s.SidebarBrand>
            </s.SideBarBrandContainer>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.MenuToggleContainer>
                <s.MenuToggle onClick={() => setSidebarState(!isSidebarOpen)} />
            </s.MenuToggleContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
