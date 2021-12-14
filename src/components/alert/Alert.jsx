import React from 'react';
import './Alert.css';

const Alert = ({ alert }) => {
   return (
      <div className="Alert">
         <span>{alert}</span>
      </div>
   );
};

export default Alert;
