import React, { Component } from "react";
import { ThemeProvider } from "@zendeskgarden/react-theming";

import { Button } from "@zendeskgarden/react-buttons";
import { TextField, Label, Hint, Input } from "@zendeskgarden/react-textfields";
import { timesSeries } from "async";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  render() {
    return (
      <div>
        <ThemeProvider>
          <TextField>
            <Label>Login</Label>
            <Hint>please enter your email</Hint>
            <input placeholder="email" />
          </TextField>
        </ThemeProvider>
        <ThemeProvider>
          <TextField>
            <Label>Password</Label>
            <Hint>please enter your password</Hint>
            <input placeholder="password" />
          </TextField>
        </ThemeProvider>
        <Button />
        <p>
          don't have an account? - <a href="/sign_up">Sign up!</a>
        </p>
      </div>
    );
  }
}

export default Login;
