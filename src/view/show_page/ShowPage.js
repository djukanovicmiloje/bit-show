import React from "react";
import fetchSingleShow from "../../services/fetchSingleShow";

class ShowPage extends React.Component {
  constructor(props) {
    super();
    this.id = props.match.params.id;
    this.state = {
      loading: true
    };
  }
  async getShow() {
    const show = await fetchSingleShow(this.id);
    this.setState({ loading: false, show });
  }
  componentDidMount() {
    this.getShow();
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }
    return (
      <div>
        <img src={this.state.show.image} alt="" />
        <h1>{this.state.show.name}</h1>
        {this.state.show.summary}
      </div>
    );
  }
}
export default ShowPage;
