import React from "react";
import SearchBar from "../searchbar/SearchBar";
import Content from "../content/Content";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  /*   setSearchValue(value) {
    this.setState({ searchValue: value });
    console.log(value);
    console.log(this.state);
  }
 */
  setSearchValue(event) {
    console.log(this.state);
    this.setState({ searchValue: event.target.value });
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <>
        <SearchBar setSearchValue={event => this.setSearchValue(event)} />
        <Content searchValue={this.state.searchValue} />
      </>
    );
  }
}
export default MainPage;
