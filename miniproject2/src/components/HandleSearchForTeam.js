import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function HandleSearchForTeam(props) {
  const [input, setInput] = useState("");
  const setSearchResults = props.setSearchResults;
  const teamData = props.teamData;

  const fetchTeamDetails = (value) => {

    if (value){
      const searchResults = teamData.filter((team) => {
        return (
          team.name && team.name.toLowerCase().includes(value)
        ); 
      });
      setSearchResults(searchResults);

    }else{
      setSearchResults(teamData);
    }
   
  };

  const handleChange = (value) => {
    setInput(value);
    fetchTeamDetails(value);
  };
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search Teams"
          className="me-2"
          aria-label="Search"
          value= {input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Form>
    </div>
  );
}
