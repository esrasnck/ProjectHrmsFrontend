import React, { useState, useEffect } from "react";
import {Dropdown } from 'semantic-ui-react';
import JobTitleService from "../../../Services/jobTitleService";

export default function JobTitlesLists() {
  const [jobTitleLists, setjobTitleLists] = useState([]);

  useEffect(()=>{ 

    let jobTitleService = new JobTitleService();

    jobTitleService.getJobTitles().then((result)=>{
      setjobTitleLists(result.data.data);
    }); },[]);
   
 
    return (
        <div>
      <Dropdown text='Job Titles' search selection  >
                <Dropdown.Menu >
                    {
                        jobTitleLists.map((c) => (
                            <Dropdown.Item key={c.id}>{c.titleName}</Dropdown.Item>
                        ))
                    }</Dropdown.Menu>
            </Dropdown>
        </div>
    )
}


