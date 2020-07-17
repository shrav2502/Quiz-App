import React from "react";

class Answers extends React.Component {
  state = { checked: false };
  handleInputChange = (e) => {
    this.props.handleOptionSelection(e.target.value);
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const styles = {
      height: "30px",
      fontSize: "20px",
      width: "500px",
      fontFamily: "Palatino Linotype",
      textAlign: "left",
      marginLeft: "90px",
      // marginTop: "15px",
      fontWeight: "700",
      color: "darkblue",
    };

    const inputStyles = {
      transform: "scale(1.2)",
      width: "35px",
    };
    return (
      <div style={styles}>
        <label htmlFor={this.props.id} className="parentLabel">
          <input
            type="radio"
            style={inputStyles}
            name={this.props.id}
            id={this.props.item}
            value={this.props.item}
            checked={this.props.selectionOption === this.props.item}
            onChange={this.handleInputChange}
            ref={(input) => (this.storeInput = input)}
          />
          {this.props.item}
        </label>
      </div>
    );
  }
}
export default Answers;
