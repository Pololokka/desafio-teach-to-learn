import React from "react";

class Link extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a href={this.props.link} className="text text-hover" target="_blank">
        {this.props.linkName}
      </a>
    );
  }
}

export default Link;
