import React, { useState } from 'react'
import axios from "axios";

export default function HandleSearchForTeam() {
  const [input, setInput] = useState("")

  
    const fetchTeamDetails = (value) => {
      axios.get("https://api.squiggle.com.au/?q=teams").then((response) => {
        const teams = response.data.teams;

        const searchResults = teams.filter((team) => {
          return value && team && team.name && team.name.toLowerCase().includes(value) // check if there is a value and check if the team exist 
          //in the array and if the value entered in the search field.
        })
        console.log(searchResults)
      });
  }

  const handleChange = (value) =>{
    setInput(value)
    fetchTeamDetails(value)
  }
    return (
    <div>
      <input
      placeholder = "Search Teams"
      value = {input}
      onChange={(e) => handleChange(e.target.value)} // when the user types take the value of the event (e) and store in the inpute variable
      />
    </div>
  )
}
