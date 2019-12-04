import React from "react";
import ShowCard from "./ShowCard";
import fetchShows from "../../services/fetchShows";
import fetchShowByQuery from "../../services/fetchShowsByQuery";

class Content extends React.Component {
  constructor({ searchValue }) {
    super();
    this.state = {
      loading: true,
      searchValue
    };
  }
  async getShows() {
    let shows;
    if (this.state.searchValue) {
      shows = await fetchShowByQuery(this.state.searchValue);
    } else {
      shows = await fetchShows();
    }
    this.setState({
      loading: false,
      shows
    });
  }
  componentDidMount() {
    this.getShows();
  }
  componentWillReceiveProps({ searchValue }) {
    /* console.log(searchValue); */
    this.setState({ searchValue });
    this.getShows();
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }
    if (this.state.shows.length === 0) {
      return <div>No shows in data base</div>;
    }
    return (
      <div id="content">
        {this.state.shows.map((show, key) => (
          <ShowCard key={key} show={show} />
        ))}
      </div>
    );
  }
}
export default Content;
