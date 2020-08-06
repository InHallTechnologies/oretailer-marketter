import React from "react";
import "./auth-page.styles.scss";

import logo from "../../assets/obuv.png";
import { firebaseAuth } from "../../backend/firebase";
import toggleProgressBar from "../../redux/progress-bar/progress-bar.action";
import { connect } from "react-redux";

class AuthPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    console.log("MOUNTED_AUTH");
    console.log("SHOW1");
    this.props.toggleProgress();
    const authStatus = firebaseAuth.onAuthStateChanged((user) => {
      if (user !== null && user !== undefined) {
        this.props.history.push("dash-board");
      }

      this.props.toggleProgress();
      console.log("HIDE1");
      authStatus();
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleCreateAccount = (event) => {
    //Handle for Create account
    this.props.history.push("create-account");
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    this.props.toggleProgress();
    console.log("SHOW2");
    //Handle Submit for login
    try {
      const user = await firebaseAuth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      if (user.user !== null || user.user !== undefined) {
        this.props.toggleProgress();
        console.log("HIDE2");
        this.props.history.push("dash-board");
      }
    } catch (err) {
      alert("something went wrong");
      // this.props.toggleProgress();
      // console.log("HIDE_ERROR");
    }
  };

  render() {
    return (
      <div className="auth-page">
        <img className="obuv-logo" src={logo} alt="obuv-logo" />
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            className="login-input"
            type="email"
            required
            name="email"
            placeholder="Email Id"
            onChange={this.handleChange}
          />
          <input
            className="login-input"
            type="password"
            required
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input className="login-button" type="submit" value="Login" />
          <button
            className="login-create-account"
            onClick={this.handleCreateAccount}
            name="login"
            type="submit"
          >
            Create new account
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProgress: () => dispatch(toggleProgressBar()),
  };
};
export default connect(null, mapDispatchToProps)(AuthPage);
