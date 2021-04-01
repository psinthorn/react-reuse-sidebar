import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {AnimatePresence, motion } from 'framer-motion';
import * as s from './Sidebar.styles';

const Sidebar = (props) => {

    const {
        brand = {fullName: '', shortName: ''}, 
        bgImg = '',
        menuItems=[],
        fonts = {
            brand: '',
            menu: ''
        },
    } = props; 
    
    // State ---------------------------------------------------------------------------------------------

    const [Branding, setBranding] = useState()
    // Toggle sidebar
    const [isSidebarOpen, setSidebarState] = useState(true)
     // state for selected menu
     const [menuSelected, setMenuSelected] = useState(menuItems[0].name)
     // Stat of sub menu
     const [subMenusItemState, setSubMenusItemState] =  useState({})

      

     // Function -----------------------------------------------------------------------------------------

     // Submenu check and state
    useEffect(() => {
        const newSubMenus = {};

        menuItems && menuItems.forEach((menu, index) => {
            const hasSubMenus = !!menu.submenu.length;

            if (hasSubMenus) {
                newSubMenus[index] = {};
                newSubMenus[index]['isOpen'] = false;
                newSubMenus[index]['isSelected'] = null;
            }
        })

    setSubMenusItemState(newSubMenus)
    // console.log(newSubMenus)
    // console.log(subMenusItemState)

    }, [menuItems])

     // Handle menu item on click
     const handleMenuItemOnClick = (menuName, index) => {
        console.log('click');
        setMenuSelected(menuName)
       
        if(subMenusItemState.hasOwnProperty(index)) {
            const subMenusCopy = JSON.parse(JSON.stringify(subMenusItemState));
            console.log('1st copy: ', subMenusCopy)

            subMenusCopy[index]['isOpen'] = !subMenusItemState[index]['isOpen']
            setSubMenusItemState(subMenusCopy)
            console.log('after update state:',  subMenusItemState)   
        }
            // console.log('index: ', index, 'Menu: ', menuName)
           
        
     }


    // Sidebar and Submenu check map to loop menu items
    const menuItemsJSX = menuItems && menuItems.map((menu, index) => {

            const isMenuItemSelected = menuSelected === menu.name;
            const isSubMenuOpen = subMenusItemState[index]?.isOpen;
            //console.log(`${menu.name} is selected ${isMenuItemSelected}`)

            // Submenu check and loop submenu
            const hasSubMenus = !!menu.submenu.length;
            const SubMenuItemsJSX = menu.submenu && menu.submenu.map((subMenu, subMenuIndex) => {
                return (
                   
                        <s.SubMenuWrapper key={subMenuIndex} isSidebarOpen={isSidebarOpen}>
                            <Link to={`${menu.to}${subMenu.to}`} style={{ textDecoration: 'none'}}>
                            <s.SubmenuItem onClick={() => {console.log(subMenu, subMenuIndex)}} >{subMenu.name}</s.SubmenuItem>
                            {/* <s.ArrowIcon></s.ArrowIcon> */}
                            </Link>
                        </s.SubMenuWrapper>
                    
                        )
            })
            // End of submenu render

            // Sidebar main menu
            return (
                <s.MenuItemContainer key={index}  selected={isMenuItemSelected} isSidebarOpen={isSidebarOpen}>
                    <s.MenuItemsWrapper selected={isMenuItemSelected} isSidebarOpen={isSidebarOpen}>
                        <Link to={menu.to} style={{ textDecoration: 'none'}} >
                            <s.MenuItems 
                            font={fonts.menu}
                            selected={isMenuItemSelected}
                            onClick={()=>{handleMenuItemOnClick(menu.name, index)}}
                            isSidebarOpen={isSidebarOpen}
                            >
                                    <s.Icon isSidebarOpen={isSidebarOpen}>{menu.icon}</s.Icon>
                                    <s.Text isSidebarOpen={isSidebarOpen}>{menu.name}</s.Text>
                                    {hasSubMenus && (
                                        <s.DropdownIcon key={index} selected={isMenuItemSelected} isSubMenuOpen={isSubMenuOpen} />
                                    )}              
                            </s.MenuItems>
                        </Link>
                            <AnimatePresence>
                                {hasSubMenus && isSubMenuOpen && (
                                    <motion.nav
                                        initial={{ opacity: 0, y: -15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3}}
                                        exit={{ opacity: 0, y: -15 }}
                                    >
                                        <s.SubMenuContainer>
                                        {SubMenuItemsJSX}
                                        </s.SubMenuContainer>
                                    </motion.nav>
                                    
                                )}
                            </AnimatePresence>                     
                    </s.MenuItemsWrapper>
                </s.MenuItemContainer>
              
                )
    })
    // End of function section --------------------------------------------------------------------------


    // Effect -------------------------------------------------------------------------------------------
    // Update Branding 
    useEffect(() => {
        isSidebarOpen ? setTimeout(() => {setBranding(brand.fullName)}, 300) : setTimeout(() => {setBranding(brand.shortName)}, 200)
    }, [isSidebarOpen, setBranding, brand.fullName, brand.shortName])


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
