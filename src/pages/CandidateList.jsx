import React, { useState, useEffect } from "react";
import CandidateService from "../Services/candidateService";
import { Table } from "semantic-ui-react";

export default function CandidateList() {
  const [candidateLists, setcandidateLists] = useState([]);

  console.log(candidateLists);

  useEffect(() => {
    let candidateService = new CandidateService();

    candidateService.getEmployers().then((result) => {
      setcandidateLists(result.data.data);
    });
  }, []);

  return (
    <div>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Nationality Id</Table.HeaderCell>
            <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
            <Table.HeaderCell>Picture Url</Table.HeaderCell>
            <Table.HeaderCell>Is Active</Table.HeaderCell>
            <Table.HeaderCell>Is Email Verified</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {

          candidateLists.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.nationalityId}</Table.Cell>
              <Table.Cell>{candidate.dateOfBirth}</Table.Cell>
              <Table.Cell>{candidate.pictureUrl}</Table.Cell>
              <Table.Cell>
                {candidate.isActive ? "Active" : "Not Active"}
              </Table.Cell>
              <Table.Cell>
                {candidate.isEmailVerified
                  ? "Verified By Email"
                  : "Not Verified Yet"}
              </Table.Cell>
            </Table.Row>
          ))
          
          }
        </Table.Body>
      </Table>
    </div>
  );
}
/*
     "id": 1,
      "email": "string",
      "isActive": true,
      "firstName": "denemedenem",
      "lastName": "stereeing",
      "nationalityId": "22222222222",
      "dateOfBirth": "1999-12-12",
      "isEmailVerified": false,
      "pictureUrl": null


*/