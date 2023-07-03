import React, {useState, useEffect}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import DisplayTeams from "./components/DisplayTeams";

import OffcanvasExample from "./components/navbar";

import SearchForm from "./components/SearchForm";
import HandleSearchForTeam from "./components/HandleSearchForTeam";

function App() {
  const [teamData, setTeamData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("https://api.squiggle.com.au/?q=teams").then((response) => {
      const teams = response.data.teams;
      setTeamData(teams);
      setSearchResults(teams);
    });
  }, []);
  return (
    <>
      <OffcanvasExample />

      <DisplayTeams teamData={searchResults}/>
      <HandleSearchForTeam teamData={teamData} setSearchResults={setSearchResults}/>
    </>
  );
}

export default App;
