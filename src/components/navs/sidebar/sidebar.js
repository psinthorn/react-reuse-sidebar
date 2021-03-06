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

        // Use darkOrange as default color palette
        colorPalette = {
            bgColor1: 'rgba(0, 0, 0, 0.8)',
            bgColor2: 'rgba(0, 0, 0, 0.8)',
            fontColor: 'rgba(255, 255, 255)',
            fontColorSelected: 'rgba(255, 112, 85, 0.8)',
            hoverColor: 'rgba(255, 112,85, 0.8)',
            dividerColor: 'rgba(255, 112, 85, 0.8)',
            selectedBackgroundCollapsedMode: 'dark'
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

        setMenuSelected(menuName)
        const subMenusCopy = JSON.parse(JSON.stringify(subMenusItemState));

            if(subMenusItemState.hasOwnProperty(index)) {
                subMenusCopy[index]['isOpen'] = !subMenusItemState[index]['isOpen']
                setSubMenusItemState(subMenusCopy)
            } else {
                    
                for (let item in subMenusItemState) {
                    subMenusCopy[item]['isOpen'] = false;
                    subMenusCopy[item]['isSelected'] = null;
                }
                setSubMenusItemState(subMenusCopy);
            }
     }

     // Handle SubMenuItem on click
     const handleSubMenuOnClick = (index, SubMenuIndex) => {
            const subMenusCopy = JSON.parse(JSON.stringify(subMenusItemState));
            subMenusCopy[index]['isSelected'] = SubMenuIndex;
            setSubMenusItemState(subMenusCopy);
            //console.log('after update state:',  subMenusItemState)   
        }
           
            


    // Sidebar and Submenu check map to loop menu items
    const menuItemsJSX = menuItems && menuItems.map((menu, index) => {

            const isMenuItemSelected = menuSelected === menu.name;
            const isSubMenuOpen = subMenusItemState[index]?.isOpen;
            //console.log(`${menu.name} is selected ${isMenuItemSelected}`)

            // Submenu check and loop submenu
            const hasSubMenus = !!menu.submenu.length;
            const SubMenuItemsJSX = menu.submenu && menu.submenu.map((subMenu, subMenuIndex) => {

                // This will be return true or false
                const subMenuItemSelected = subMenusItemState[index]?.isSelected ===  subMenuIndex
                return (
                   
                        <s.SubMenuWrapper 
                            key={subMenuIndex} 
                            isSidebarOpen={isSidebarOpen}
                            colorPalette={colorPalette}
                        >
                            <Link to={`${menu.to}${subMenu.to}`} style={{ textDecoration: 'none'}}>
                            <s.SubmenuItem 
                            onClick={() => {handleSubMenuOnClick(index, subMenuIndex)}} 
                            subMenuItemSelected = {subMenuItemSelected}
                            colorPalette={colorPalette}
                            >
                            {subMenu.name}
                            </s.SubmenuItem>
                            {/* <s.ArrowIcon></s.ArrowIcon> */}
                            </Link>
                        </s.SubMenuWrapper>
                    
                        )
            })
            // End of submenu render


            // Sidebar main menu
            return (
                <s.MenuItemContainer key={index}  selected={isMenuItemSelected} isSidebarOpen={isSidebarOpen}>
                    <s.MenuItemsWrapper 
                        selected={isMenuItemSelected}
                        isSidebarOpen={isSidebarOpen}
                        colorPalette={colorPalette}
                    >
                        <Link to={menu.to} style={{ textDecoration: 'none'}} >
                            <s.MenuItems 
                            font={fonts.menu}
                            selected={isMenuItemSelected}
                            onClick={()=>{handleMenuItemOnClick(menu.name, index)}}
                            isSidebarOpen={isSidebarOpen}
                            colorPalette={colorPalette}
                            >
                                    <s.Icon isSidebarOpen={isSidebarOpen}>{menu.icon}</s.Icon>
                                    <s.Text isSidebarOpen={isSidebarOpen}>{menu.name}</s.Text>
                                    {hasSubMenus && (
                                        <s.DropdownIcon 
                                            key={index} 
                                            selected={isMenuItemSelected} 
                                            isSubMenuOpen={isSubMenuOpen}
                                            colorPalette={colorPalette} />
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
        <s.SidebarContainer 
            bgImg={bgImg} 
            isSidebarOpen={isSidebarOpen} 
            colorPalette={colorPalette}
        >
            <s.SideBarBrandContainer>
                <s.SidebarBrand 
                    font={fonts.brand}
                    colorPalette={colorPalette}
                >{Branding}</s.SidebarBrand>
            </s.SideBarBrandContainer>
            <s.MenuContainer >
                {menuItemsJSX}
            </s.MenuContainer>
            <s.MenuToggleContainer>
                    <s.MenuToggle 
                        onClick={() => setSidebarState(!isSidebarOpen)}
                        colorPalette={colorPalette}
                     />
                </s.MenuToggleContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
