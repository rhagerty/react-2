import React from "react";
import { shallow } from 'enzyme';
import FoodItem from "./FoodItem";
import toJson from 'enzyme-to-json';

const routeMatch = { params: { items: 'nachos' } };
it("renders without crashing", function() {
    shallow(<FoodItem match={routeMatch}/>);
  });

  it('matches snapshot', function() {
    let wrapper = shallow(<FoodItem match={routeMatch} />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
  