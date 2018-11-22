import React, { Component } from "react";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import fetch from "isomorphic-fetch";
import { Button } from "@zendeskgarden/react-buttons";
import { TextField, Label, Hint, Input } from "@zendeskgarden/react-textfields";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPasswordConfirmChange = this.onPasswordConfirmChange.bind(this);
    this.onClickSend = this.onClickSend.bind(this);
    this.state = {
      email: null,
      password: null,
      passwordConfirm: null,
      warning: null
    };
  }
  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  onPasswordChange(event) {
    this.setState({
      password: event.target.value,
      warning: null
    });
  }
  onPasswordConfirmChange(event) {
    this.setState({
      passwordConfirm: event.target.value,
      warning: null
    });
  }
  onClickSend() {
    if (this.state.password === this.state.passwordConfirm) {
      fetch("http://localhost:8080/credentials", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      }).then(res => console.log(res.json()));
    } else {
      this.setState({
        warning: "passwords don't match"
      });
    }
  }
  render() {
    return (
      <div>
        <ThemeProvider>
          <TextField>
            <Label>Login</Label>
            <Hint>please enter your email</Hint>
            <Input placeholder="email" onChange={this.onEmailChange} />
          </TextField>
        </ThemeProvider>
        <ThemeProvider>
          <TextField>
            <Label>Password</Label>
            <Hint>please enter your password</Hint>
            <Input placeholder="password" onChange={this.onPasswordChange} />
          </TextField>
        </ThemeProvider>
        <ThemeProvider>
          <TextField>
            <Label>Password</Label>
            <Hint>confirm your password</Hint>
            <Input
              placeholder="password"
              onChange={this.onPasswordConfirmChange}
            />
          </TextField>
        </ThemeProvider>
        <Button onClick={this.onClickSend}>Sign up</Button>
        <p>{this.state.warning}</p>
      </div>
    );
  }
}

export default Login;
