import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from "react-bootstrap";

export default function DisplayTeams(){

    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        const fetchTeams = () => {
              axios.get("https://api.squiggle.com.au/?q=teams").then((response) => {
                const teams = response.data.teams;
                setTeamData(teams);
              });
             };
            fetchTeams()
         }, []);


    return(
        <>
         <Container>
            <Row>
                {teamData.map((teamData, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Img src={teamData.logo}/>

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
    )
}
