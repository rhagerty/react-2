import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {
let numDrinks= drinks.length;
let numSnacks = snacks.length;
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          Our menu features {numSnacks} snack options and {numDrinks} beverages.
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
