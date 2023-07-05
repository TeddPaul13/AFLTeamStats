import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Row, Col, Container } from "react-bootstrap";

export default function ShowTeamStandings() {
  const [teamStandings, setTeamStandings] = useState([]);

  useEffect(() => {
    axios.get("https://api.squiggle.com.au/?q=standings").then((response) => {
      const standingList = response.data.standings;
      setTeamStandings(standingList);
      console.log(response);
      console.log(standingList);
    });
  }, []);

  return (
    <>
      <div className="justify-content-center d-flex">
        <h1>2023 Team Standings</h1>
      </div>
      <Container>
        <Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Games Played</th>
          </tr>
        </thead>
        <tbody>
          {teamStandings.map((teamlist, index) => (
            <tr key={index}>
              <td>{teamlist.rank}</td>
              <td>{teamlist.name}</td>
              <td>{teamlist.wins}</td>
              <td>{teamlist.losses}</td>
              <td>{teamlist.played}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Row>
      </Container>
    </>
  );
}
