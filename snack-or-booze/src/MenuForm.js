import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "./MenuForm.css"

function MenuForm() {
  const { item } = useParams();
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: "",
  });

  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setNewItem((newItem) => ({
      // use spread to keep all existing data from parent component, adding new data to state object
      ...newItem,
      [name]: value,
    }));
  }

  async function storeItem(newItem) {
    try {
      await axios.post(`http://localhost:5000/${item}`, {
        // passing in q as a param for the query searchTerm
        id: newItem.name,
        name: newItem.name,
        description: newItem.description,
        recipe: newItem.recipe,
        serve: newItem.serve,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // this will run on initial render and whenever name changes

  function handleSubmit(evt) {
    evt.preventDefault();
    storeItem(newItem);
    alert("Menu item added!")

    // redirect with history.push and the path
    // after the email form is submitted it redirects to the root
    // can also go back and forward unlike redirect
    history.push(`/${item}`);
  }

  return (
    <section className="col-md-4">
      <h3>Add New Item</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Item Name:</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={newItem.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Short Description:</Label>
          <Input
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            placeholder="An ice-cold, refreshing classic."
            value={newItem.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe Details:</Label>
          <Input
            type="textarea"
            name="recipe"
            id="recipe"
            onChange={handleChange}
            placeholder="Mix 3 parts vodka & 1 part dry vermouth."
            value={newItem.recipe}
          />
        </FormGroup>
        <FormGroup>
          <Label for="serve">How should this be served?</Label>
          <Input
            type="textarea"
            name="serve"
            id="serve"
            onChange={handleChange}
            placeholder="Serve very cold, straight up."
            value={newItem.serve}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </section>
  );
}

export default MenuForm;
