import React from 'react';
import JobList from "../pages/JobList";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import EmployeeList from "../pages/EmployeeList";

export default function Section() {
    return (
        <div>
        {/* <CandidateList></CandidateList>
        <EmployerList></EmployerList>
        <EmployeeList></EmployeeList>  */}
        <JobList></JobList>
        </div>
    )
}
