import React from 'react';
import {FaMicroblog,FaExpand,FaConnectdevelop,FaHome,FaRoute, FaChargingStation, FaChevronRight} from  'react-icons/fa'
import * as s from './App.styles';
import * as Palette from './components/themes/colors'

// components
import MainView from './components/mainview/MainView';
import Sidebar from './components/navs/sidebar/sidebar';


function App(){

  const brand = {fullName: "F2Dev", shortName: "F2"};
  // const bgImg = 'images/chipset-neural-network-01.jpg'
  const bgImg = 'images/neural_network.png';
  const fonts = {
    brand: 'Roboto',
    menu: 'Roboto'
  }

   // menu items list
   const menuItems = [
    {name: 'Home', to: '/', icon: <FaHome />, submenu: [] , status: true },
    {name: 'About', to: '/about', icon: <FaExpand />, submenu: [] , status: true },
    {name: 'Services', to: '/services', icon: <FaChargingStation />, submenu: [] , status: true },
    {name: 'Destinations', to: '/destinations', icon: <FaRoute />, submenu: [
        {name: 'Chaweng', to: '/chaweng', icon: <FaChevronRight />, submenu:[], status: true },
        {name: 'Lamai', to: '/lamai', icon: <FaChevronRight />, submenu:[], status: true },
        {name: 'Choengmon', to: '/choengmon', icon: <FaChevronRight />, submenu:[], status: true },
        {name: 'Plaileam', to: '/plaileam', icon: <FaChevronRight />, submenu:[], status: true },
        {name: 'Bophut', to: '/bophut', icon: <FaChevronRight />, submenu:[], status: true },
    ], status: true},
    {name: 'Blog', to: '/blog', icon: <FaMicroblog />, submenu: [
      {name: 'Coding', to: '/coding', icon: <FaChevronRight />, submenu:[], status: true },
    ] ,status: true },
    {name: 'Contact', to: '/contact', icon: <FaConnectdevelop />, submenu: [] ,status: true },
    ]

  return (
    <s.App>
       <Sidebar 
        brand={brand} 
        bgImg={bgImg} 
        fonts={fonts} 
        menuItems={menuItems}
        colorPalette={Palette.darkOrange}
        />
       <MainView />
    </s.App>
  );
}

export default App;
