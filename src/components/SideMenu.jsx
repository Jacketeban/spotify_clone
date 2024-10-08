// src/components/SideMenu.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as FavoritesIcon } from '../assets/icons/favorites.svg';

const SideMenu = () => {
  const menuItems = [
    { name: 'Inicio', path: '/', icon: <HomeIcon className="w-6 h-6" /> },
    { name: 'Buscar', path: '/search', icon: <SearchIcon className="w-6 h-6" /> },
    { name: 'Favoritas', path: '/favorites', icon: <FavoritesIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="w-20 bg-gray-800 text-white flex flex-col items-center py-6 space-y-6">
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center hover:text-green-400 ${
              isActive ? 'text-green-500' : ''
            }`
          }
        >
          {item.icon}
          <span className="text-xs mt-1">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SideMenu;
