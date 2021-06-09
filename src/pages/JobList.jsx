import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobTitleService from "../Services/jobTitleService";

export default function JobList() {

  const [jobLists, setJobLists] = useState([]);

  useEffect(()=>{

    let jobTitleService = new JobTitleService()

    jobTitleService.getJobTitles().then(result=> setJobLists(result.data.data))
    console.log(jobLists)
  },[]);

  return (
    <div>
      {
        jobLists.map((jobList) => (
        <Table key={jobList.id}>
          <Table.Body>
            <Table.Row >
              <Table.Cell>{jobList.titleName}</Table.Cell>
              <Table.Cell textAlign="right">{jobList.description}</Table.Cell>
             
            </Table.Row>
          </Table.Body>
        </Table>
      ))
      
      }
    </div>
  );
}
