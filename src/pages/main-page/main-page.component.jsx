import React from "react";
import { firebaseAuth, firebaseDB } from "../../backend/firebase";
import Operation from "../../components/operation/operation.component";

import "./main-page.styles.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    firebaseAuth.onAuthStateChanged((user) => {
      if (user === null || user === undefined) {
        this.props.history.push("/");
      }
    });

    this.state = {
      marketters: [],
      response: [],
    };
  }

  componentDidMount() {
    var list = [];
    firebaseDB.ref("ALL_LOGS").on("value", async (dataSnapshot) => {
      list = [];
      for (const MARKETTERID in dataSnapshot.val()) {
        for (const OPERATION_ID in dataSnapshot.child(MARKETTERID).val()) {
          const OPERATION = dataSnapshot
            .child(MARKETTERID)
            .child(OPERATION_ID)
            .val();
          list.push(OPERATION);
        }
      }

      for (var i = 0; i < list.length; i++) {
        await firebaseDB
          .ref("CREDENTIALS")
          .child(list[i].entryById)
          .once("value", (snapShot) => {
            list[i].entryById = snapShot.child("Name").val();
          });
      }

      this.setState({
        marketters: list,
      });
    });
  }

  handleClick = (event) => {
    firebaseAuth.signOut();
    this.props.history.push("/");
  };

  gotoMarketterList = (event) => {
    this.props.history.push("marketters-list");
  };

  render() {
    return (
      <div className="main-page">
        <button className="button signout" onClick={this.handleClick}>
          Sign out
        </button>
        <button
          className="button marketter-list"
          onClick={this.gotoMarketterList}
        >
          Marketter list
        </button>
        <h1 className="section-title">Current Stores Covered</h1>
        <div className="data-container">
          {this.state.marketters.map((item) => (
            <Operation
              shopPhoneNumber={item.shopPhoneNumber}
              shopName={item.shopName}
              personOfContactName={item.personOfContactName}
              entryById={item.entryById}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
