import React, { useState, useEffect } from "react";

import { Table } from "semantic-ui-react";
import JobAdvertisementService from "../../../Services/jobAdvertisementService";


export default function JobAdvertisementList() {
  const [jobAdvertisementLists, setjobAdvertisementLists] = useState([]);

  console.log(jobAdvertisementLists);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();

    jobAdvertisementService.getByIsActive().then((result) => {
      setjobAdvertisementLists(result.data.data);
    });
  }, []);

  return (
    <div>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>
            <Table.HeaderCell>Appeal Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Opened</Table.HeaderCell>
    
          </Table.Row>
        </Table.Header>
        <Table.Body>

            {
                jobAdvertisementLists.map(jobAdvertisement=>(

                    <Table.Row key={jobAdvertisement.id}>
                    <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.openPositionCount}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.appealDeadline}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.isOpened ? "Opened" : "Not Opened"}</Table.Cell>
                    
                  </Table.Row>

                ))

            }
         
        </Table.Body>
      </Table>
    </div>
  );
}
