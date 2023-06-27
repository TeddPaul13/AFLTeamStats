import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";


export default function HandleSearchForTeam() {
  const [teamInfo, setTeamInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  

  useEffect(() => {
    axios.get("https://api.squiggle.com.au/?q=teams").then(
      (response) => {
        const retrivedData = response.data.teams;
        
        setIsLoading(true);
        setTeamInfo(retrivedData);
      },
      (error) => {
        setIsLoading(true);
        setError(error);
      }
    );
  }, []);

  const teamInfoData = Object.values(teamInfo)
console.log(teamInfoData)

  function search(teamInfo) {
    return teamInfo.filter((item) => {
      if (teamInfo.name == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
          console.log(newItem)
        });
        
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  //We display error message if getting data from the API fails
  //If it doesn't fail we diplay the data in a list

  if (error) {
    return <p>{error.message}, The API has stopped working</p>;
  } else if (!isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <div>
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        </div>
        <div className="select">
                        <select
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select"
                            aria-label="Filter Countries By Region" 
                        >
                            <option value="All">Filter By Home City</option>
                            <option value="Africa">Adelaide</option>
                            <option value="Americas">Melbourne</option>
                            <option value="Asia">Sydney</option>
                           
                        </select>
                        <span className="focus"></span>
                    </div>
        <Container>
            <Row>
                {search(teamInfoData).map((teamData, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Img src={"https://squiggle.com.au/" +teamData.logo} alt= "Team Logo"/>

                            <Card.Body>
                                <Card.Title>{teamData.name}</Card.Title>
                                <Card.Text>{teamData.abbrev}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
      </>
    );
  }

  return <div>HandleSearchForTeam</div>;
}
