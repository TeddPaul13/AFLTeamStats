import React, { useState } from "react";

export default function HandleSearchForTeam(props) {
  const [input, setInput] = useState("");
  const setSearchResults = props.setSearchResults;
  const teamData = props.teamData;

  const fetchTeamDetails = (value) => {

    if (value){
      const searchResults = teamData.filter((team) => {
        return (
          team.name && team.name.toLowerCase().includes(value)
        ); // check if there is a value and check if the team exist
        //in the array and if its value entered in the search field.
      });
      setSearchResults(searchResults);
    } else{
      setSearchResults(teamData);
    }
   
  };

  const handleChange = (value) => {
    setInput(value);
    fetchTeamDetails(value);
  };
  return (
    <div>
      <input
        placeholder="Search Teams"
        value={input}
        onChange={(e) => handleChange(e.target.value)} // when the user types take the value of the event (e) and store in the inpute variable
      />
    </div>
  );
}
