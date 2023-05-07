import React from "react";

class ExternalLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a
        href={this.props.link}
        className="text text-hover link"
        target="_blank"
      >
        {this.props.linkName}
      </a>
    );
  }
}

export default Link;
