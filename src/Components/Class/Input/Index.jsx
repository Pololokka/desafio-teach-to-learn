import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="button"
        value={this.props.value}
        className="text text-hover btn__nav"
        id="guide"
        onClick={() => this.props.func(this.props.scrollRef)}
      />
    );
  }
}

export default Input;
