import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from "react-bootstrap";


const [teamData, setTeamData] = useState(null);



export default function GetTeams() {

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.squiggle.com.au/?q=teams')
            const teamDataList = await response.json()
            setTeamData(teamDataList)
                  }
            fetchData()
    }, [])
  return (
    <Container>
    <Row>
        {teamData.map((teamData, k) => (
            <Col key={k} xs={12} md={4} lg={3}>
                <Card >
                    <Card.Img src="https://squiggle.com.au/"/>  //"https://squiggle.com.au/" + teamsObj.logo;

                    <Card.Body>
                        <Card.Title>{teamData.name}</Card.Title>
                        <Card.Text>{teamData.team_name}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
</Container>
  )
}
