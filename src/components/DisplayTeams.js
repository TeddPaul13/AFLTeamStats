import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";

export default function DisplayTeams(props) {
  return (
    <>
      <div className="header justify-content-center d-flex">
        <h1>AUSTRALIAN FOOTBALL LEAGUE TEAMS</h1>
      </div>
      <Container>
        <Row>
          {props.teamData.map((teamData, k) => (
            <Col className="teamcols" key={k} xs={12} md={4} lg={3}>
              <Card className="allteams">
                <Card.Img
                  className="teamlogo"
                  src={"https://squiggle.com.au/" + teamData.logo}
                  alt="Team Logo"
                />

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
