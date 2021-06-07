import React from "react";
import { Menu,Label,Input } from 'semantic-ui-react';

export default function Filters() {
  return (
    <div>
      <Menu vertical>
      <Menu.Item
          name='Cities'
        >
          Cities
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search Cities...' />
        </Menu.Item>
        <Menu.Item
          name='Job Lists'

        >
         Job Lists
        </Menu.Item>

        <Menu.Item
          name='Job Positions'
        
        >
        
          Job Positions
        </Menu.Item>

 
      </Menu>
    </div>
  );
}
