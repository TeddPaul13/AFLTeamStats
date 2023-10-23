import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import HandleSearchForTeam from "./HandleSearchForTeam";
import DisplayTeams from "./DisplayTeams";
import ShowTeamStandings from "./ShowTeamStandings";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import SearchForm from "./SearchForm";
function OffcanvasNavbar(props) {
  const [selectedYear, setSelectedYear] = useState(null);
  const navigate = useNavigate();

  const handleYearSelect = (year) => {
    setSelectedYear(year)
   // Pass the selectedYear to the callback function in App.js
    props.onYearSelect(year);
    navigate("/standings")
    
  };

  return (
    <>
      {["xxl"].map(
        (
          expand // full navbar for xxl screen brakpoint
        ) => (
          <Navbar key={expand} expand={expand} className="bg-danger mb-3">
            <Container fluid>
              <Navbar.Brand href="#">AFL TEAM STATS</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    AFL TEAM STATS
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>

                    <NavDropdownMenu
                      title="View Teams Standings"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <DropdownSubmenu href="#" title="Select Year">
                        <NavDropdown.Item onClick={() => handleYearSelect(2020)}>
                          2020
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          2021
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          2022
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          2023
                        </NavDropdown.Item>
                      </DropdownSubmenu>
                     
                    </NavDropdownMenu> 
                  </Nav>
                  {/* {selectedYear && <ShowTeamStandings year={selectedYear} />} */}
                  {props.children}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        )
      )}
      </>
  );
}

export default OffcanvasNavbar;
