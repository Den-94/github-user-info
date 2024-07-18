import React, { Component } from "react";
import Form from "./Form";
import UserDetails from "./UserDetails";

class App extends Component {
  state = {
    user: null,
    repos: [],
  };

  handleFormSubmit = async (username) => {
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    const userData = await userResponse.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const reposData = await reposResponse.json();

    this.setState({ user: userData, repos: reposData });
  };

  handleReset = () => {
    this.setState({ user: null, repos: [] });
  };

  render() {
    const { user, repos } = this.state;
    return (
      <div>
        {!user ? (
          <Form onSubmit={this.handleFormSubmit} />
        ) : (
          <UserDetails user={user} repos={repos} onReset={this.handleReset} />
        )}
      </div>
    );
  }
}

export default App;
