import { Card, Button, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const SingleDisplay = ({ data }) => {
  const navigate = useNavigate();
  let idRoute = "/" + data.company_name;
  let idFavorite = "/favorites";

  let location = useLocation();

  return (
    <Container>
      <Card onClick={() => navigate(idRoute)} className="my-3 w-100">
        <Card.Body>
          <Card.Title>
            Company name: {data.company_name} and Job Title: {data.title}
          </Card.Title>
          <Card.Text>{data.url}</Card.Text>
          <Button variant="primary">
            Date of Publication: {data.publication_date.slice(0, 10)}
          </Button>
        </Card.Body>
      </Card>

      {location.pathname === idRoute && (
        <Button variant="secondary" onClick={() => navigate(idFavorite)}>
          Add to Favorite
        </Button>
      )}
    </Container>
  );
};

export default SingleDisplay;
