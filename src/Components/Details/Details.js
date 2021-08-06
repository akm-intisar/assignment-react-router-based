import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import femalePhoto from "../../Images/Photo/female.png";
import malePhoto from "../../Images/Photo/male.png";

const Details = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        if ({props.strGender} === "male"){" "}
        {<Card.Img variant="top" src="femalePhoto" />}
        else {<Card.Img variant="top" src="malePhoto" />}
        <Card.Body>
          <Card.Title>{props.strDescriptionEN}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
