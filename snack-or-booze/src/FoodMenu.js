import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, title }) {
  
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Below is a list of our current menu options.
          </CardText>
          <ListGroup>
            {snacks.map(snack => (
              <Link to={`/${title}/${snack.id}`} key={snack.id}>
                <ListGroupItem>{snack.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <CardText>
            Submit your own recipe <Link to={`/create/${title}`}><button>here!</button></Link>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
