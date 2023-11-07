import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    const { username, password } = this.state;

    if (username === "example" && password === "password") {
      this.setState({ message: "Login successful!" });
    } else {
      this.setState({ message: "Invalid username or password." });
    }
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={this.state.username}
            onChange={this.handleInputChange}
          /><br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleInputChange}
          /><br />

          <button type="submit">Login</button>
        </form>

        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default Login;
