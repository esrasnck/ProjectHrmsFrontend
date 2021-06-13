import React, { useState, useEffect } from "react";
import { Menu,Label,Input,Dropdown } from 'semantic-ui-react';
import CitiesList from "../components/SideBarComponents/FilterSection/CitiesList";
import JobTitlesLists from "../components/SideBarComponents/FilterSection/JobTitlesLists";
import JobAdvertisementFilter from "../components/SideBarComponents/FilterSection/JobAdvertisementFilter";
import "./csses/filter.css"

export default function Filters() {

  return (
    <div>
      <Menu vertical >
        <Menu.Item className="filter">
        <CitiesList></CitiesList>
        </Menu.Item>
        <Menu.Item className="filter">
        <JobTitlesLists></JobTitlesLists>
        </Menu.Item>
        <Menu.Item  className="filter">
         <JobAdvertisementFilter></JobAdvertisementFilter>
        </Menu.Item>
      </Menu>
    </div>
  );
}
