import React from "react";

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  getResults = () => {
    this.setState({
      show: true,
    });
  };
  render() {
    const { count } = this.props;
    const { value } = this.props;

    return (
      <div>
        <button
          disabled={count >= 9 ? value : !value}
          onClick={this.getResults}
        >
          Get results
        </button>
        {this.state.show ? <div>Your score is: {this.props.score}</div> : null}
      </div>
    );
  }
}
export default Results;
