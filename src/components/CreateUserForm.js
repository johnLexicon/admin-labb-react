import React from 'react'
import {useDispatch} from 'react-redux';
import {Formik, Form, useField} from 'formik'
import {TextField, Box, Button} from '@material-ui/core'
import { addUserAction } from '../actions/usersActions';

const CustomTextField = ({label, ...props}) => {
    const [fields, meta] = useField(props)
    const errorMessage = meta.error && meta.touched ? meta.error : ''
    return (
        <TextField {...fields} {...props} label={label} helperText={errorMessage} error={!!errorMessage}  />
    )
}

const CreateUserForm = ({validationSchema}) => {

    const dispatch = useDispatch()

    return (
        <Formik 
        validationSchema={validationSchema}
        initialValues={{firstName: '', lastName: '', email:'', avatar: ''}}
        onSubmit={(data, {resetForm}) => {
          const {firstName, lastName, email, avatar} = data
          dispatch(addUserAction({firstName, lastName, email, avatar}))
          resetForm()
        }
        }>
        {() => (
        <Form style={{margin: 'auto', marginTop: '5rem'}}>
          <Box margin={4}>
            <CustomTextField type="text" name="firstName" label="First name" InputProps={{style:{fontSize: '1.5rem'}}} />
          </Box>
          <Box margin={4}>
            <CustomTextField type="text" name="lastName" label="Last name" InputProps={{style:{fontSize: '1.5rem'}}} />
          </Box>
          <Box margin={4}>
            <CustomTextField type="email" name="email" label="Email" InputProps={{style:{fontSize: '1.5rem'}}} />
          </Box>
          <Box margin={4}>
            <CustomTextField type="text" name="avatar" label="Photo Url" InputProps={{style:{fontSize: '1.5rem'}}} />
          </Box>
          <Box margin={4}>
            <Button variant="outlined" color="primary" type="submit" size="large">
              Submit
            </Button>
          </Box>
        </Form>
        )}
      </Formik>
    )
}

export default CreateUserForm
