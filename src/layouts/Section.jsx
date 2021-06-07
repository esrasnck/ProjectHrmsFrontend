import React from 'react';
import JobList from "../pages/JobList";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList"


export default function Section() {
    return (
        <div>
        {/* 
       <EmployerList></EmployerList> 
        <CandidateList></CandidateList>
        <JobList></JobList> */}
        <JobAdvertisementList></JobAdvertisementList>
       
        </div>
    )
}
