import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";

const headers = {
  accept: "applicaton/json",
  "Content-Type": "application/json",
};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Forgot = () => {
  const history = useHistory();
  const classes = useStyles();

  const [emailAddress, setemailAddress] = useState(null);

  async function create() {
    // email = email.toLowerCase();
    let item = { emailAddress };
    let result = await fetch(
      "http://localhost:3000/user/forgot",
      { headers },
      {
        method: "POST",

        body: JSON.stringify(item),
      }
    );
    console.log(result);
    result = await result.json();
    if (result.msg === "user login sucessfully") {
      sessionStorage.setItem("user-info", JSON.stringify(result.msg));
    } else {
      alert(result.msg);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={emailAddress}
            onChange={(e) => setemailAddress(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
              e.preventDefault();
              create();
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};
