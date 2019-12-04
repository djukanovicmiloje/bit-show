import React from "react";
import "./SearchBar.css";

/* class SearchBar extends React.Component {
  constructor({ setSearchValue }) {
    super();
    this.setSearchValue = setSearchValue;
  }
  handleChange(event) {
    this.value = event.target.value;
    this.setSearchValue(event.target.value);
    console.log(event.target.value);
  }
  render() {
    return (
      <div id="searchBar">
        <input onChange={event => this.handleChange(event)} type="text"></input>
      </div>
    );
  }
} */

const SearchBar = ({ setSearchValue }) => (
  <div id="searchBar">
    <input onChange={event => setSearchValue(event)} type="text"></input>
  </div>
);

export default SearchBar;
