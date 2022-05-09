import { Card, Button } from "react-bootstrap";

const SingleDisplay = ({ data }) => {
  return (
    <Card>
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
