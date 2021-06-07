import React from "react";
import { Button, Container, Dropdown, Menu, Icon } from "semantic-ui-react";

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
            <Icon  name="address card outline" size="large" />{" "}
            Candidates{" "}
          </Menu.Item>

          <Menu.Item onClick={employer}>
            <Icon  name="user" size="large" /> Employers{" "}
          </Menu.Item>
          <Menu.Item onClick={employee}>
            <Icon  name="id badge" size="large" />{" "}
            Employees{" "}
          </Menu.Item>
        
          <Menu.Menu position="right">
          <Menu.Item>
          <Button >Login</Button>
          </Menu.Item>
            <Menu.Item>
              <Button >Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
