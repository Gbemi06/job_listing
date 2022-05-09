import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const JobDetails = () => {
  const params = useParams();
  console.log(params);

  const [details, setDetails] = useState();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    let response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${params}`
    );
    let data = await response.json();
    console.log(data);
    setDetails(data.data);
    console.log(details);
  };

  return (
    <div>
      <div>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>
              Company name: {details[0].company_name} and Job Title:{" "}
              {details[0].title}
            </Card.Title>
            <Card.Text>{details[0].url}</Card.Text>
            <Button variant="primary">
              Date of Publication: {details[0].publication_date}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default JobDetails;
