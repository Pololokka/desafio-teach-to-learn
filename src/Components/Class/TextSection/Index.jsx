import React from "react";
import "./Styles.css";

class TextSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="section__container">
        <h2 className="subtitle">{this.props.sectionTitle}</h2>
        {this.props.sectionText?.map((element, index) => {
          return (
            <p key={index} className="text">
              {element}
            </p>
          );
        })}
      </section>
    );
  }
}

export default TextSection;
