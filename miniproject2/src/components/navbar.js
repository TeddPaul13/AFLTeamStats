import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

function OffcanvasExample() {
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
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdownMenu
                      title="View Teams Standings"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                       
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <DropdownSubmenu href="#" title="Select Year">
                        <NavDropdown.Item href="#action3">
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
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        )
      )}
    </>
  );
}

export default OffcanvasExample;
