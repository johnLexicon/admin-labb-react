import React from 'react'
import * as Yup from 'yup'
import {Typography, Container, makeStyles} from '@material-ui/core';
import CreateUserForm from '../components/CreateUserForm';

const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      marginTop: '3.5rem'
    }
})

const CreateUser = () => {
    const classes = useStyles()

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid Email').required('Email is required')
    })

    return (
        <Container className={classes.root} maxWidth="lg">
            <Typography variant="h3">Create User</Typography>
            <CreateUserForm validationSchema={validationSchema} />
        </Container>
    )
}

export default CreateUser
