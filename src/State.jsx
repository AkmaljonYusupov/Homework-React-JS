import React from "react";
import "./state.css";
import icon from "./img/icon.jpg";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    const getEmail = (event) => {
      console.log(event.target.value);
      this.setState({ email: event.target.value });
    };
    const getPassword = (event) => {
      console.log(event.target.value);
      this.setState({ password: event.target.value });
    };

    console.log(this.state);
    return (
      <div className="container">
        <div className="imput__item">
          <form action="POST">
            <h1>sign up</h1>
            <div className="email__item">
              <span>Email</span>
              <input
                type="email"
                onChange={getEmail}
                title="Ma`lumot kiriting"
                required
              />
            </div>
            <div className="password__item">
              <span>Password</span>
              <input
                type="password"
                onChange={getPassword}
                title="Ma`lumot kiriting"
                required
              />
            </div>
            <button>sign up</button>
          </form>
          <div className="line">
            <span>or</span>
          </div>
          <div className="icon__items">
            <img src={icon} alt="icon" />
          </div>
          <div className="tile">
            <p>Already a user ? </p>
            <a href="#">LOGIN</a>
          </div>
          <span className="text">Email</span>
          <p>{this.state.email}</p>
          <span className="text">Password</span>
          <p>{this.state.password}</p>
        </div>
      </div>
    );
  }
}
export default State;
