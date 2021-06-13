import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import CandidateButton  from "../components/NavBarComponents/CandidateButton";
import EmployerButton from "../components/NavBarComponents/EmployerButton";
import EmployeeButton from "../components/NavBarComponents/EmployeeButton";
import SignUpButton from "../components/NavBarComponents/SignUpButton";
import LoginButton from "../components/NavBarComponents/LoginButton";

export default function Navi() {

    const employee =()=>{
       // employe göre listeler
    }
   
    const employer =()=>{
       // employer a göre listeler
    }

    const candidate =()=>{
       // iş arayana göre listeler
    }


  return (
    <div>
      <Menu inverted fixed="top">
      <Container>
          <Menu.Item name="hire a helper">
            <Icon name="hire a helper" size="large" /> HMRS
          </Menu.Item>

          <Menu.Item onClick={candidate}>
            
         <CandidateButton></CandidateButton>
            
          </Menu.Item>
          <Menu.Item onClick={employer}>

           <EmployerButton></EmployerButton>
          </Menu.Item>

          <Menu.Item onClick={employee}>
          <EmployeeButton></EmployeeButton>
          </Menu.Item>
        
          <Menu.Menu position="right">
          <Menu.Item>

           <LoginButton></LoginButton>

          </Menu.Item>
            <Menu.Item>

             <SignUpButton></SignUpButton>
             
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
