import React from "react";
import ShowCard from "./ShowCard";
import fetchShows from "../../services/fetchShows";

class Content extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loading: true
    };
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    } else {
      return (
        <div id="content">
          {this.state.shows.map((show, key) => (
            <ShowCard key={key} show={show} />
          ))}
        </div>
      );
    }
  }
  async getShows() {
    const shows = await fetchShows();
    this.setState({
      loading: false,
      shows
    });
  }
  componentDidMount() {
    this.getShows();
  }
}
export default Content;
