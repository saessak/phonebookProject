import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { phonebookActions } from "../redux/reducer";

const SearchForm = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    /*dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } }); //이전문법*/
    dispatch(phonebookActions.getSearchByUserName({keyword}));
  };
  return (
    <Form onSubmit={searchByName} className="search-form">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;