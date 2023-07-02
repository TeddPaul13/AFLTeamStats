import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SearchForm() {
  //const [q, setQ] = useState("");
  // const [searchParam] = useState(["name"]);
  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      {/* //value={q}
        //onChange={(e) => setQ(e.target.value)}
      /> */}
    </>
  );
}
