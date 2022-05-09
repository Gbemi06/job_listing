import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SingleDisplay = ({ data }) => {
  const navigate = useNavigate();
  let idRoute = "/" + data.company_name;
  return (
    <Card onClick={() => navigate(idRoute)}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
          Company name: {data.company_name} and Job Title: {data.title}
        </Card.Title>
        <Card.Text>{data.url}</Card.Text>
        <Button variant="primary">
          Date of Publication: {data.publication_date}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleDisplay;
