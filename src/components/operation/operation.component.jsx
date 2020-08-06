import React from "react";
import "./operation.styles.scss";

import anime from "animejs/lib/anime.es";
import { firebaseDB } from "../../backend/firebase";

class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    anime({
      targets: ".operation-card",
      backgroundColor: "#FFF",
      duration: 800,
      delay: anime.stagger(100),
      easing: "linear",
    });
   
  }

  render() {
    return (
      <div className="operation-card">
        <h2 className="oreration-name">{this.props.personOfContactName}</h2>
        <h3>{this.props.shopName}</h3>
        <span>{this.props.shopPhoneNumber}</span>
        <span>{this.props.entryById}</span>
      </div>
    );
  }
}

export default Operation;
