import React, { useState, useEffect } from "react";
import EmployerService from "../Services/employerService";
import { Table } from "semantic-ui-react";

export default function EmployerList() {
  const [employerLists, setEmployerLists] = useState([]);

  console.log(employerLists)
  useEffect(() => {
    let employerService = new EmployerService();

    employerService
      .getEmployers()
      .then((result) =>{
        
          setEmployerLists(result.data)
      });

  
  }, []);

  return (
    <div>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>WebSite</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Is Active</Table.HeaderCell>
            <Table.HeaderCell>Is Verified</Table.HeaderCell>
            <Table.HeaderCell>Is Verified By Employee</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
 <Table.Body >
        {

        employerLists.map((employer) => (

            <Table.Row key={employer.id}>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.webSite}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.isActive ? "Active" : "Not Active"}</Table.Cell>
              <Table.Cell>{employer.isEmailVerified ? "Verified By Email" : "Not Verified Yet"}</Table.Cell>
              <Table.Cell>{employer.isVerifiedByEmlopyee ? "Verified By Employee" : "Not Verified Yet"}</Table.Cell>
            </Table.Row>
        

  ))
        }  
        </Table.Body>
      </Table>
    </div>
  );
}

