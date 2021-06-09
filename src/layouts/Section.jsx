import React from 'react';
import JobList from "../pages/JobList";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList"


export default function Section() {
    return (
        <div>
        {/*    <CandidateList></CandidateList>
        <EmployerList></EmployerList> 
     <JobList></JobList> 
        */}
   
           <JobAdvertisementList></JobAdvertisementList>
        </div>
    )
}
