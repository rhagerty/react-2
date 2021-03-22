import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./AddItem.css";

function AddItem() {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            What type of menu item would you like to add?
          </CardTitle>

          <Link to={"/create/snacks"}>
            <button>Snack</button>
          </Link>
          <Link to={"/create/drinks"}>
            <button>Drink</button>
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddItem;
