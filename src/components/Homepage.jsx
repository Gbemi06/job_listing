import { Button, Form } from "react-bootstrap";

import { useState, useEffect } from "react";
import Display from "./Display";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
      );
      const data = await response.json();
      setResult(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="roleValue">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>
      <Button className="py-3" variant="primary" onClick={() => fetchData()}>
        Search Button
      </Button>
      {<Display data={result} />}
    </>
  );
};

export default Homepage;
