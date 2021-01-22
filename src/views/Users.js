import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsersAction} from '../actions/usersActions';
import { Grid, Typography, Container, makeStyles } from '@material-ui/core'
import UserCard from '../components/UserCard'

const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      marginTop: '3.5rem'
    }
})

const Users = () => {
    const dispatch = useDispatch()
    const {users, isLoading} = useSelector(state => state.usersReducer)
    const classes = useStyles()

    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch])

    return (
        <Container className={classes.root} maxWidth="lg">
            {isLoading ? <Typography variant="h3">Loading...</Typography> : <Typography variant="h3">Users</Typography>}            
            {users && <Grid container spacing={3}>
                {users.map(user => (<Grid item key={user.id}>
                    <UserCard user={user}/>
                </Grid>))}
            </Grid>}
        </Container>
    )
}

export default Users
