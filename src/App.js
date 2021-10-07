import "./App.css";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import { Form, FormControl, Nav, Navbar, Modal, Button } from "react-bootstrap";
import Add from "./Components/Add";
import InitList from "./InitList";
import FilterwithName from "./Components/FilterwithName";
import FilterwithRating from "./Components/FilterwithRating";
function App() {
  const [list, setList] = useState(InitList);
  const handleAddMovie = (val) => {
    setList([...list, val]);
  };
  const [filter, setFilter] = useState("");
  const handleFilterName = (film) => {
    setFilter(film);
  };
  const [filterRating, setFilterRating] = useState(1);

  const handleFilterRating = (value) => {
    setFilterRating(value);
  };

  return (
    <div className="app" style={{ backgroundColor: "#B0C4DE" }}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Add handeleAddMovie={handleAddMovie} />
          </Nav>

          <FilterwithName handleFilterName={handleFilterName} />
        </Navbar.Collapse>

        <FilterwithRating setFilterRating={handleFilterRating} />
      </Navbar>

      <MovieList
        list={list.filter(
          (elm) =>
            elm.title.toUpperCase().startsWith(filter.toUpperCase()) &&
            elm.rating >= filterRating
        )}
      />
    </div>
  );
}

export default App;
