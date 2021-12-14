import React from 'react';
import { Link } from 'react-router-dom';
import './Overview.css';

const Overview = () => {
   return (
      <div className="Overview">
         <div className="overview__top">
            <span className="title__Big">Overview</span>
            <Link to="/dashboard">
               <span className="title__Small">Dashboard</span>
            </Link>
         </div>

         <div className="overview__Bottom">
            <div className="overview__Info">
               <div className="overview__Info__Title">Profile Views</div>
               <span className="overview__Info__Data">89</span>
            </div>

            <div className="overview__Info">
               <div className="overview__Info__Title">Mentorship Sessions</div>
               <span className="overview__Info__Data">5</span>
            </div>

            <div className="overview__Info">
               <div className="overview__Info__Title">Jobs Applied</div>
               <span className="overview__Info__Data">3</span>
            </div>

            <div className="overview__Info">
               <div className="overview__Info__Title">Skills Verified</div>
               <span className="overview__Info__Data">3</span>
            </div>
         </div>
      </div>
   );
};

export default Overview;
