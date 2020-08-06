import React from "react";
import "./App.css";
import AuthPage from "./pages/auth-page/auth-page.component";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main-page/main-page.component";
import MarkettersList from "./pages/marketters-list/marketters-list.components";
import CreateMarketerAccount from "./pages/create-marketter-account/create-marketter-account.component";
import { connect } from "react-redux";
import ProgressBar from "./components/progress-bar/progress-bar.component";

function App(props) {
  return (
    <div className="App">
      {props.progressVisiblity ? <ProgressBar /> : null}
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/dash-board" component={MainPage} />
        <Route exact path="/marketters-list" component={MarkettersList} />
        <Route exact path="/create-account" component={CreateMarketerAccount} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    progressVisiblity: state.progressBar.visiblity,
  };
};

export default connect(mapStateToProps)(App);
