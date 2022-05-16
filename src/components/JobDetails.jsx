import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../slices/favoriteSlice.js";

const JobDetails = () => {
  const params = useParams();

  const favoriteListLength = useSelector(
    (state) => state.favorite.content.length
  );

  const favoriteList = useSelector((state) => state.favorite.content);

  console.log(favoriteList);

  const dispatch = useDispatch();

  const searchCompany = params.company;

  const navigate = useNavigate();
  let idFavorite = "/favorites";

  const [details, setDetails] = useState();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    let response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${searchCompany}`
    );
    let data = await response.json();
    setDetails(data.data);
  };
  console.log(details);

  // const inFavoriteList = favorites.content.includes(details[0].company_name)
  return (
    <div>
      <div className="ml-auto mt-2">
        <Button color="primary" onClick={() => navigate(idFavorite)}>
          Number of items in Favorite List:
          <span className="ml-2">{favoriteListLength}</span>
        </Button>
      </div>
      {details?.slice(0, 10).map((detail, i) => (
        <div key={i}>
          <Card className="w-100">
            <Card.Body>
              <Card.Title>
                Company name: {detail.company_name} and Job Title:{" "}
                {detail.title}
              </Card.Title>
              <Card.Text>{detail.url}</Card.Text>
              <Button variant="primary">
                Date of Publication: {detail.publication_date.slice(0, 10)}
              </Button>
            </Card.Body>
          </Card>

          <Button
            onClick={() => dispatch(addToFavorites(detail))}
            variant="secondary"
          >
            Add to Favorite
          </Button>
        </div>
      ))}
    </div>
  );
};

export default JobDetails;
