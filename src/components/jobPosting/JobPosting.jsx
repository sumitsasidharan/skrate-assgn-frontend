import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import './JobPosting.css';
import { time_ago, parseDate } from '../../utilities';

const JobPosting = ({ jobPosting, setAlert }) => {
   const { role, organization_name, location, date_posted } = jobPosting;

   // Converting UK / indian date format to standard javascript
   const stndDateFormat = parseDate(date_posted);

   // Utility function for converting standard date to '<hours | days> ago' format
   const job_posted = time_ago(stndDateFormat);

   // Alert set for 3 seconds.
   const handleClick = () => {
      setAlert('Alert: Right arrow was clicked!');

      setTimeout(() => {
         setAlert('');
      }, 3000);
   };

   return (
      <div className="JobPosting">
         <img
            src="https://source.unsplash.com/800x600/?face"
            alt=""
            className="JobPosting__profile__img"
         />
         <div className="JobPosting__info">
            <span className="job__title">{role}</span>
            <span className="company__name">{organization_name}</span>
            <span className="job__location">{location}</span>
         </div>

         <span className="JobPosting__time">{job_posted}</span>

         <div className="Sidebar__Icon">
            <ArrowRightAltIcon fontSize="large" onClick={handleClick} />
         </div>
      </div>
   );
};

export default JobPosting;
