import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Session from '../session/Session';
import './UpcomingSession.css';
import Alert from '../alert/Alert';

const UpcomingSession = () => {
   const [sessionData, setSessionData] = useState([]);
   const [alert, setAlert] = useState('');

   // Alert set for 3 seconds.
   const handleClick = () => {
      setAlert('Alert: View-All button was clicked!');

      setTimeout(() => {
         setAlert('');
      }, 3000);
   };

   useEffect(() => {
      const fetchSessions = async () => {
         const res = await axios.get(
            'https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818'
         );

         setSessionData(res.data.upcoming_sessions);
      };

      fetchSessions();
   }, []);

   return (
      <div className="Upcoming">
         <div className="upcoming__top">
            <span className="title__Big">Upcoming Sessions</span>
            <span onClick={handleClick} className="title__Small">
               View All
            </span>
         </div>

         {alert ? <Alert alert={alert} /> : null}
         <div className="upcoming__bottom">
            {sessionData.map((data, index) => (
               <Session key={index} data={data} setAlert={setAlert} />
            ))}
         </div>
      </div>
   );
};

export default UpcomingSession;
