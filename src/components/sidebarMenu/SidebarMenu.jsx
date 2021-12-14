import React, { useState } from 'react';
import {
   Home,
   Dashboard,
   School,
   BusinessCenter,
   Person,
} from '@material-ui/icons';
import './SidebarMenu.css';
import SidebarIcon from '../sidebarIcon/SidebarIcon';

const iconsArray = [Home, Dashboard, School, BusinessCenter, Person];
const iconNames = ['home', 'dashboard', 'school', 'businessCenter', 'person'];

const SidebarMenu = () => {
   // Home button is active by default.
   const [active, setActive] = useState(iconsArray[0]);

   return (
      <div className="SidebarMenu">
         {iconsArray.map((icon, index) => (
            <SidebarIcon
               key={index}
               Icon={icon}
               iconName={iconNames[index]}
               active={active === icon}
               setActive={setActive}
            />
         ))}
      </div>
   );
};

export default SidebarMenu;
