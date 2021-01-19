import React, {useState} from "react";
import firebase from '../firebase';
import {useHistory} from 'react-router-dom';
import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { TextField, Box, IconButton, Button } from "@material-ui/core";
import {Alert} from '@material-ui/lab';
import { Formik, Form, useField } from "formik";

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
                history.push('/')
             })
            .catch((err) => {
                //TODO: change error message
                setErrorMessage(err.message)
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
                InputProps={{
                  endAdornment: (
                    <IconButton position="end">
                      <MailOutlineSharpIcon />
                    </IconButton>
                  ),
                  style: { fontSize: "1.5rem" },
                }}
              />
            </Box>
            <Box margin={4}>
              <CustomTextField
                type={showPassword ? "text" : "password"}
                name="password"
                label="Password"
                InputProps={{
                  endAdornment: (
                    <IconButton position="end" onClick={handleClickShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                  style: { fontSize: "1.5rem" },
                }}
              />
            </Box>
            {errorMessage && <Box margin={4}>
                <Alert style={{width:'25%', margin: 'auto'}} severity="error">{errorMessage}</Alert>
            </Box>}
            <Box margin={4}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    );
}

export default SignInForm
