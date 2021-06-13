import React from 'react';
import { Dropdown, Input } from "semantic-ui-react";



const tagOptions = [
    {
      key: "Important",
      text: "Important",
      value: "Important",
      label: { color: "red", empty: true, circular: true },
    },
  ];
export default function EmployeeButton() {
    return (
        <div>
                 <Dropdown
        text="Employees"
        icon="id badge"
        floating
        labeled
        button
        size="large"
        className="icon"
      >
        <Dropdown.Menu>
          <Input icon="search" iconPosition="left" className="search" />
          <Dropdown.Divider />
          <Dropdown.Header icon="tags" content="Tag Label" />
          <Dropdown.Menu scrolling>
            {tagOptions.map((option) => (
              <Dropdown.Item key={option.value} {...option} />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
        </div>
    )
}

//  Employees confirme sayfası olabilir. drowp ile 