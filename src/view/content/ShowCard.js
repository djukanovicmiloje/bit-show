import React from "react";
import "./ShowCard.css";
import { Link } from "react-router-dom";

class ShowCard extends React.Component {
  constructor({ show }) {
    super();
    this.state = { show };
  }
  componentWillReceiveProps({ show }) {
    this.setState({ show });
  }
  render() {
    return (
      <div className="showCard">
        <Link to={`/show/${this.state.show.id}`}>
          <img src={this.state.show.image} alt="" />
        </Link>
        <p>{this.state.show.name}</p>
      </div>
    );
  }
}

export default ShowCard;
