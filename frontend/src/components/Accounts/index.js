import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

import useStyles from "./styles";
import Input from "./Input";

const initialState = {
  username: "",
  tin: "",
  email: "",
  password: "",
  // confirmPassword: "",
};

const API = axios.create({ baseURL: 'http://127.0.0.1:8000'});

const Login = ({ setIsLoggedIn }) => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const alert = useAlert();

  const switchMode = () => {
    setIsSignUp((prev) => !prev);
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    try {
      var value
      if(!isSignUp) {
        const { data } = await API.post('/api/login/', formData);
        value = data
      } else {
        const { data } = await API.post('/api/register/', formData);
        value = data
      }
      localStorage.setItem('profile', JSON.stringify({ ...value }));
      setIsLoggedIn(true);
      alert.show('Login Successful', { type: 'success' });
      if(value?.token)   history.push('/');
    } catch (err) {
      alert.show(isSignUp ? 'User already exists' : 'Incorrect Credentials', { type: 'error' });
    }
  };

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            <Input
              name="username"
              label="Username"
              handleChange={handleChange}
              autoFocus
            />
            {isSignUp && (
                <>
                  <Input
                    name="tin"
                    label="TIN Number"
                    handleChange={handleChange}
                    type="text"
                  />
                  <Input
                    name="email"
                    label="Email Address"
                    handleChange={handleChange}
                    type="email"
                  />
                </>
            )}
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {/* {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
              />
            )} */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
