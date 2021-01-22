import React from 'react'
import SignInForm from './../components/SignInForm';
import {Container, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      marginTop: '3.5rem'
    }
})

const SignIn = () => {
    const classes = useStyles()

    return (
        <Container className={classes.root} maxWidth="lg">
            <SignInForm />
        </Container>
    )
}

export default SignIn
