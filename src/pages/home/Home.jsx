import React from 'react';
import NewJobPostingsList from '../../components/newJobPostingsList/NewJobPostingsList';
import Overview from '../../components/overview/Overview';
import SidebarMenu from '../../components/sidebarMenu/SidebarMenu';
import UpcomingSession from '../../components/upcomingSessionsList/UpcomingSession';

import './Home.css';

const Home = () => {
   return (
      <div className="Home">
         <SidebarMenu />

         <div className="left__Widgets">
            <Overview />
            <UpcomingSession />
         </div>

         <div className="right__Widgets">
            <NewJobPostingsList />
         </div>
      </div>
   );
};

export default Home;
