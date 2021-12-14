import React from 'react';
import SidebarMenu from '../../components/sidebarMenu/SidebarMenu';
import './Dashboard.css';

const Dashboard = () => {
   return (
      <React.Fragment>
         <div className="Dashboard">
            <SidebarMenu />

            <div className="dashboard__main">
               <h1>Dashboard</h1>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Dashboard;
