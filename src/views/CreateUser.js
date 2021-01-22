import React from 'react'
import * as Yup from 'yup'
import {Typography} from '@material-ui/core';
import CreateUserForm from '../components/CreateUserForm';

const CreateUser = () => {

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid Email').required('Email is required')
    })

    return (
        <div>
            <Typography variant="h3">Create User</Typography>
            <CreateUserForm validationSchema={validationSchema} />
        </div>
    )
}

export default CreateUser
