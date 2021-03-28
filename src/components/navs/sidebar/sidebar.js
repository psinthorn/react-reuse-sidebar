import {useState, useEffect} from 'react';
import * as s from './Sidebar.styles';

const Sidebar = (props) => {

    const {
        brand = {fullName: '', shortName: ''}, 
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

     const [Branding, setBranding] = useState()

     // Effect
    useEffect(() => {isSidebarOpen ? setTimeout(() => {setBranding(brand.fullName)}, 300) : setTimeout(() => {setBranding(brand.shortName)}, 200)}, [isSidebarOpen, setBranding, brand.fullName, brand.shortName])


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
                isSidebarOpen={isSidebarOpen}
                >
                    <s.MenuItemsWrapper selected={isMenuItemSelected}>
                        <s.Icon isSidebarOpen={isSidebarOpen}>{menu.icon}</s.Icon>
                        <s.Text isSidebarOpen={isSidebarOpen} >{menu.name}</s.Text>
                    </s.MenuItemsWrapper>
                    
                </s.MenuItems>
                )
    })

    return (
        <s.SidebarContainer bgImg={bgImg} isSidebarOpen={isSidebarOpen}>
            <s.SideBarBrandContainer>
                <s.SidebarBrand font={fonts.brand}>{Branding}</s.SidebarBrand>
            </s.SideBarBrandContainer>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.MenuToggleContainer>
                <s.MenuToggle onClick={() => setSidebarState(!isSidebarOpen)} />
            </s.MenuToggleContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
