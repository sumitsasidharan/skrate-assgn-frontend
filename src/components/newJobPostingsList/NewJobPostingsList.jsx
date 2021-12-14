import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewJobPostingsList.css';
import JobPosting from '../jobPosting/JobPosting';
import Alert from '../alert/Alert';

const NewJobPostingsList = () => {
   const [jobPostingsList, setJobPostingsList] = useState([]);
   const [alert, setAlert] = useState('');

   // Alert set for 3 seconds.
   const handleClick = () => {
      setAlert('Alert: View-All button was clicked!');

      setTimeout(() => {
         setAlert('');
      }, 3000);
   };

   useEffect(() => {
      const fetchJobPostings = async () => {
         const res = await axios.get(
            'https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818'
         );
         setJobPostingsList(res.data.job_postings);
      };

      fetchJobPostings();
   }, []);

   return (
      <div className="NewJobPostingsList">
         <div className="NewJobPostingsList__top">
            <span className="title__Big">New Job Postings</span>
            <span onClick={handleClick} className="title__Small">
               View All
            </span>
         </div>

         {alert ? <Alert alert={alert} /> : null}
         <div className="NewJobPostingsList__bottom">
            {jobPostingsList.map((job, index) => (
               <JobPosting key={index} jobPosting={job} setAlert={setAlert} />
            ))}
         </div>
      </div>
   );
};

export default NewJobPostingsList;
