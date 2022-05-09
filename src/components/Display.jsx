import { Row, Col } from "react-bootstrap";
import SingleDisplay from "./SingleDisplay";

const Display = ({ data }) => {
  console.log(data);
  return (
    <Row>
      <Col md={3}>
        {data.map((info) => (
          <SingleDisplay data={info} />
        ))}
      </Col>
    </Row>
  );
};

export default Display;
