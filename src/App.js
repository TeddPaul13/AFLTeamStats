import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./components/display.css";

import DisplayTeams from "./components/DisplayTeams";

import ShowTeamStandings from "./components/ShowTeamStandings";

import OffcanvasNavbar from "./components/navbar";

import SearchForm from "./components/SearchForm";
import HandleSearchForTeam from "./components/HandleSearchForTeam";

function App() {
  const [teamData, setTeamData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  // useEffect for fetching data
  useEffect(() => {
    axios.get("https://api.squiggle.com.au/?q=teams").then((response) => {
      const teams = response.data.teams;
      setTeamData(teams);
      setSearchResults(teams);
    });
  }, []);

  //Callback function to update selectedYear
  const handleYearSelect = (year) => {
    setSelectedYear(year);

  };

  return (
    <>
      <OffcanvasNavbar onYearSelect={handleYearSelect}>
        <HandleSearchForTeam
          teamData={teamData}
          setSearchResults={setSearchResults}
        />
      </OffcanvasNavbar>

      <DisplayTeams teamData={searchResults} />

      {/* Render the show Team Standings table when the year is selected from the dropdown menu. */}
      <div className="standingsTable">
        {selectedYear && <ShowTeamStandings year={selectedYear} />}
      </div>
    </>
  );
}

export default App;
