import React from "react";
import { firebaseDB } from "../../backend/firebase";
import setNewMarkettersList from "../../redux/markettes/marketters.action";
import { connect } from "react-redux";
import Marketters from "../../components/maketters/marketters.components";
import "./marketters-list.styles.scss";
import { selectMarketters } from "../../redux/markettes/marketters.selector";

class MarkettersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const list = [];
    firebaseDB.ref("MARKETTERS").on("value", (dataSnapshot) => {
      for (const state in dataSnapshot.val()) {
        for (const MARKETTERID in dataSnapshot.child(state).val()) {
          list.push(dataSnapshot.child(state).child(MARKETTERID).val());
        }
      }

      this.props.setMarkettersList(list);
    });
  }
  handleClick = (event) => {
    window.print();
  };

  render() {
    return (
      <div className="marketters-list">
        <h1 className="title">List of active marketters</h1>
        <div className="container">
          {/* <button onClick={this.handleClick}>Print</button> */}
          {this.props.markettersList.map((list) => (
            <Marketters key={list.Name} marketter={list} />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMarkettersList: (list) => dispatch(setNewMarkettersList(list)),
  };
};

const mapStateToProps = (state) => {
  return {
    markettersList: selectMarketters(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkettersList);
