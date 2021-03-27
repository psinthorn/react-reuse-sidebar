import React, { useState } from 'react';
import * as s from './App.styles';

// components
import MainView from './components/mainview/MainView';
import Sidebar from './components/navs/sidebar/sidebar';


function App(){

  const brand = "F2Dev";
  const bgImg = 'images/northern-lights.jpg'
  const fonts = {
    brand: 'Roboto',
    menu: 'Roboto'
  }

   // menu items list
   const menuItems = [
    {name: 'Home', to: '/', icon: '', submenu: [] , status: true },
    {name: 'About', to: '/about', icon: '', submenu: [] , status: true },
    {name: 'Services', to: '/services', icon: '', submenu: [] , status: true },
    {name: 'Destinations', to: '/destinations', icon: 'FaCompass', submenu: [
        {name: 'Chaweng', to: '/chaweng', icon: '', submenu:[], status: true },
        {name: 'Lamai', to: '/lamai', icon: '', submenu:[], status: true },
        {name: 'Choengmon', to: '/choengmon', icon: '', submenu:[], status: true },
        {name: 'Plaileam', to: '/plaileam', icon: '', submenu:[], status: true },
        {name: 'Bophut', to: '/bophut', icon: '', submenu:[], status: true },
    ], status: true},
    {name: 'Blog', to: '/blog', icon: '', submenu: [] ,status: true },
    {name: 'Contact', to: '/contact', icon: '', submenu: [] ,status: true },
    ]

  return (
    <s.App>
       <Sidebar brand={brand} bgImg={bgImg} fonts={fonts} menuItems={menuItems}/>
       <MainView />
    </s.App>
  );
}

export default App;
