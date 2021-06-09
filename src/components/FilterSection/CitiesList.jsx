import React, { useState, useEffect } from "react";
import {Dropdown } from 'semantic-ui-react';
import CityService from "../../Services/cityService";


export default function CitiesList() {
    const [cityLists, setCityLists] = useState([]);

    useEffect(()=>{
      let cityService = new CityService();
  
      cityService.getCities().then((result)=>{
        setCityLists(result.data.data);
      }); },[]);
  
    return (
        <div>
      <Dropdown text='Cities' search selection  >
                <Dropdown.Menu >
                    {
                        cityLists.map((c) => (
                            <Dropdown.Item key={c.id}>{c.name}</Dropdown.Item>
                        ))
                    }</Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
