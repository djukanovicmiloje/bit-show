import React from "react";

class ShowPage extends React.Component {
  constructor(props) {
    super();
    this.id = props.match.params.id;
    this.state = {
      loading: true
    };
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }
  }
}
