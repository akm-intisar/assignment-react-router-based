import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomepageStructure = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.strTeamBadge} />
        <Card.Body>
          <Card.Title>{props.strTeam}</Card.Title>
          <Button variant="primary">See Details</Button>
        </Card.Body>
      </Card> 
      
    </div>
  );
};

export default HomepageStructure;
