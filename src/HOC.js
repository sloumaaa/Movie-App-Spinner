import React from "react";
import Spinner from "./Spinner";

const HOC = App => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        timeup: true
      };

      setTimeout(
        () =>
          this.setState({
            timeup: false
          }),
        1500
      );
    }

    render() {
      return this.state.timeup ? (
        <Spinner />
      ) : (
        <App {...this.props} />
      );
    }
  };
};

export default HOC;
