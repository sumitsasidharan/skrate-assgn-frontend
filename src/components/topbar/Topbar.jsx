import React from 'react';
import './Topbar.css';

const Topbar = ({ title }) => {
   return (
      <div className="Topbar">
         <h2 className="logo">{title || 'Skrate'}</h2>

         <div className="profile">
            <img
               src="https://source.unsplash.com/500x500/?face"
               alt="display profile"
               className="profile__img"
            />
            <span className="profile__name">Joe Stockton</span>
         </div>
      </div>
   );
};

export default Topbar;
