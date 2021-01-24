import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Form, useField} from 'formik'
import {TextField, Box, Button} from '@material-ui/core'
import { addUserAction, checkEmailUniquenessAction } from '../actions/usersActions';
import * as Yup from 'yup'

const CustomTextField = ({label, ...props}) => {
    const [fields, meta] = useField(props)
    const errorMessage = meta.error && meta.touched ? meta.error : ''
    return (
        <TextField {...fields} {...props} label={label} helperText={errorMessage} error={!!errorMessage}  />
    )
}

const CreateUserForm = () => {

    const dispatch = useDispatch()
    const {userExists} = useSelector(state => state.usersReducer)


    Yup.addMethod(Yup.string, 'checkDuplicatedEmail', () => {
      return Yup.string().test('checkDuplicatedEmail', 'The email address already exists', 
        async email => {
          const re = /\S+@\S+\.\S+/

          // Checks if the email is a valid email. If is not there is no use to dispatch the action for retrieving all the emails for comparison.
          if(!re.test(email)){  
            return true
          }

          await dispatch(checkEmailUniquenessAction(email))
          if(userExists){
            return false // NOT VALID!
          } else {
            return true
          }
        })
      })
    
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .checkDuplicatedEmail()
        .email('Invalid Email')
        .required('Email is required')
    })

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
        {({isValid, dirty}) => (
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
            <Button disabled={!(isValid && dirty)} variant="outlined" color="primary" type="submit" size="large">
              Submit
            </Button>
          </Box>
        </Form>
        )}
      </Formik>
    )
}

export default CreateUserForm
