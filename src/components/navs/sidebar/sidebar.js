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
    
    // State ---------------------------------------------------------------------------------------------

    const [Branding, setBranding] = useState()
    // Toggle sidebar
    const [isSidebarOpen, setSidebarState] = useState(true)
     // state for selected menu
     const [menuSelected, setMenuSelected] = useState(menuItems[0].name)
     // Stat of sub menu
     const [subMenuState, setSubMenuState] =  useState({})
     
    

     // Function -----------------------------------------------------------------------------------------

     // Handle menu item on click
     const handleMenuItemOnClick = (menuName) => {
        setMenuSelected(menuName)
     }

    // Sidebar and Submenu check map to loop menu items
    const menuItemsJSX = menuItems && menuItems.map((menu, i) => {

            const isMenuItemSelected = menuSelected === menu.name
            //console.log(`${menu.name} is selected ${isMenuItemSelected}`)

            // Submenu check and loop submenu
            const hasSubMenus = !!menu.submenu.length;
            const SubMenuItemsJSX = menu.submenu && menu.submenu.map((subMenu, subMenuIndex) => {
                return (
                   
                        <s.SubMenuWrapper key={subMenuIndex} isSidebarOpen={isSidebarOpen}>
                            <s.SubmenuItem >{subMenu.name}</s.SubmenuItem>
                            {/* <s.ArrowIcon></s.ArrowIcon> */}
                        </s.SubMenuWrapper>
                    
                        )
            })
            // End of submenu render

            // Sidebar main menu
            return (
                <s.MenuItemContainer key={i}  selected={isMenuItemSelected} isSidebarOpen={isSidebarOpen}>
                    <s.MenuItemsWrapper selected={isMenuItemSelected} isSidebarOpen={isSidebarOpen}>
                        <s.MenuItems 
                        font={fonts.menu}
                        selected={isMenuItemSelected}
                        onClick={()=>{handleMenuItemOnClick(menu.name)}}
                        isSidebarOpen={isSidebarOpen}
                        >
                                <s.Icon isSidebarOpen={isSidebarOpen}>{menu.icon}</s.Icon>
                                <s.Text isSidebarOpen={isSidebarOpen} >{menu.name}</s.Text>
                                {hasSubMenus && (
                                    <s.DropdownIcon selected={isMenuItemSelected} isSidebarOpen={isSidebarOpen}/>
                                )}              
                        </s.MenuItems>
                            {hasSubMenus && (
                                <s.SubMenuContainer>
                                    {SubMenuItemsJSX}
                                </s.SubMenuContainer>
                            )}
                            
                    </s.MenuItemsWrapper>
                </s.MenuItemContainer>
              
                )
    })
    // End of function section --------------------------------------------------------------------------


    // Effect -------------------------------------------------------------------------------------------
    // Update Branding 
    useEffect(() => {isSidebarOpen ? setTimeout(() => {setBranding(brand.fullName)}, 300) : setTimeout(() => {setBranding(brand.shortName)}, 200)}, [isSidebarOpen, setBranding, brand.fullName, brand.shortName])


    // Update Sidebar state by windows width
    useEffect(() => {
         const windowsWidthUpdate = () => {
             if(window.innerWidth < 1280 && isSidebarOpen) setSidebarState(false);
             else setSidebarState(true)
         }
         window.addEventListener('resize', windowsWidthUpdate)
         return () => window.removeEventListener('resize', windowsWidthUpdate);
 
     }, [isSidebarOpen])
 

    // End of effect -----------------------------------------------------------------------------------------------------

    // Render sidebar menu -----------------------------------------------------------------------------------------------
    return (
        <s.SidebarContainer bgImg={bgImg} isSidebarOpen={isSidebarOpen}>
            <s.SideBarBrandContainer>
                <s.SidebarBrand font={fonts.brand}>{Branding}</s.SidebarBrand>
            </s.SideBarBrandContainer>
            <s.MenuContainer >
                {menuItemsJSX}
            </s.MenuContainer>
            <s.MenuToggleContainer>
                    <s.MenuToggle onClick={() => setSidebarState(!isSidebarOpen)} />
                </s.MenuToggleContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
