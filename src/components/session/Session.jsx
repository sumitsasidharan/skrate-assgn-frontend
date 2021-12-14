import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import './Session.css';

const Session = ({ data, setAlert }) => {
   const { mentor_name, timings, date, session_type } = data;

   // Alert set for 3 seconds.
   const handleClick = () => {
      setAlert('Alert: Right arrow was clicked!');

      setTimeout(() => {
         setAlert('');
      }, 3000);
   };

   return (
      <div className="Session">
         <img
            src="https://source.unsplash.com/800x801/?face"
            alt=""
            className="session__profile__img"
         />

         <div className="session__info">
            <span className="mentor__name">{mentor_name}</span>
            <span className="session__topic">Flutter</span>
         </div>

         <div className="timings">
            <span className="time">{timings}</span>
            <span className="date">{date}</span>
         </div>

         <button
            className={`session_type ${
               session_type === 'Mentorship' ? 'mentorship' : 'review'
            }`}>
            {session_type}
         </button>

         <div className="Sidebar__Icon">
            <ArrowRightAltIcon fontSize="large" onClick={handleClick} />
         </div>
      </div>
   );
};

export default Session;
