import React, {useState} from "react";
import firebase from '../firebase';
import {useHistory} from 'react-router-dom';
import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { TextField, Box, IconButton, Button, makeStyles } from "@material-ui/core";
import {Alert} from '@material-ui/lab';
import { Formik, Form, useField } from "formik";

const usingStyles = makeStyles({
  multiLineColor: {
    color: '#fff'
  },
  inputLabel: {
    color: '#fff',
    "&.focused": {
      color: "#fff"
    },
  },
  underline: {
    '&:before': {
        borderBottom: '1px solid #fff'
    },
    '&:after': {
        borderBottom: `1px solid #fff`
    },
    '&:hover': {
      borderBottom: '1px solid #fff'
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottom: `1px solid #fff`
    },
  },
  icon: {
    color: '#fff'
  },
  errorAlert: {
    background: 'transparent',
    border: '1px solid red',
    color: 'red'
  }
})

const CustomTextField = ({ label, ...props }) => {
  const [fields, meta] = useField(props);
  const errorMessage = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...fields}
      {...props}
      label={label}
      helperText={errorMessage}
      error={!!errorMessage}
    />
  );
};

const SignInForm = () => {
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const classes = usingStyles()

    const handleClickShowPassword = (e) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    };
  
    return (
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(data) => {
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                setErrorMessage(null)
                history.push('/users')
             })
            .catch((err) => {
                setErrorMessage('Invalid credentials')
            })
        }}
      >
        {() => (
            <Form>
              <Box margin={4}>
                <CustomTextField
                  type="email"
                  name="email"
                  label="Email"
                  InputLabelProps={{classes:{root: classes.inputLabel, focused:'focused'}}}
                  InputProps={{
                    endAdornment: (
                      <IconButton position="end">
                        <MailOutlineSharpIcon className={classes.icon} />
                      </IconButton>
                    ),
                    style: { fontSize: "1.5rem" },
                    className: classes.multiLineColor,
                    classes:{root: classes.underline, focused: 'focused'}
                  }}
                />
              </Box>
              <Box margin={4}>
                <CustomTextField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
                  InputLabelProps={{classes:{root: classes.inputLabel, focused:'focused'}}}
                  InputProps={{
                    endAdornment: (
                      <IconButton position="end" onClick={handleClickShowPassword}>
                        {showPassword ? <Visibility className={classes.icon} /> : <VisibilityOff className={classes.icon} />}
                      </IconButton>
                    ),
                    style: { fontSize: "1.5rem" },
                    className: classes.multiLineColor,
                    classes:{root: classes.underline, focused: 'focused'}
                  }}
                />
              </Box>
              {errorMessage && <Box margin={4}>
                  <Alert severity="error" className={classes.errorAlert}>{errorMessage}</Alert>
              </Box>}
              <Box margin={4} style={{textAlign: 'right'}}>
                <Button variant="outlined" size="large" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </Form>
        )}
      </Formik>
    );
}

export default SignInForm
