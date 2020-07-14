import React from "react";

class Next extends React.Component {
  render() {
    const { value } = this.state;
    const { count } = this.state;
    return (
      <button disabled={value} onClick={this.handleClick}>
        Next
      </button>
    );
  }
}

export default Next;
