import React from "react";
// import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneFavorite } from "../slices/favoriteSlice";
import { FaTrash } from "react-icons/fa";

/*const mapStateToProps = (state) => ({
  favoriteList: state.favorite.content,
});*/

const Favorite = () => {
  const favoriteList = useSelector((state) => state.favorite.content);
  console.log(favoriteList);

  const dispatch = useDispatch();

  return (
    <div>
      {favoriteList?.slice(0, 10).map((detail, detail_id) => (
        <div key={detail_id}>
          <Card className="w-100">
            <Card.Body>
              <Card.Title>
                Company name: {detail.company_name} and Job Title:{" "}
                {detail.title}
              </Card.Title>
              <Card.Text>{detail.url}</Card.Text>
              <div>
                <Button variant="primary">
                  Date of Publication: {detail.publication_date.slice(0, 10)}
                </Button>
                <Button
                  variant="danger"
                  className="ml-3"
                  onClick={() => dispatch(deleteOneFavorite(detail._id))}
                >
                  <FaTrash />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
