import React from 'react'
import {Container, makeStyles} from '@material-ui/core';
import CreateUserForm from '../components/CreateUserForm';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PageHeader from './../components/PageHeader';

const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      marginTop: '3.5rem',
    }
})

const CreateUser = () => {
    const classes = useStyles()

    return (
        <Container className={classes.root} maxWidth="lg">
            <PageHeader title="Create User" subtitle="Create a new user" icon={<PersonAddIcon fontSize="large" />} />
            <CreateUserForm />
        </Container>
    )
}

export default CreateUser
