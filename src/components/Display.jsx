import { Row, Col } from "react-bootstrap";
import SingleDisplay from "./SingleDisplay";

const Display = ({ data }) => {
  console.log(data);
  return (
    <Row>
      <Col>
        {data.map((info, i) => (
          <div key={i}>
            <SingleDisplay data={info} />
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default Display;
