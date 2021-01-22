import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsersAction} from '../actions/usersActions';
import { Grid, Typography } from '@material-ui/core'
import UserCard from '../components/UserCard'

const Users = () => {

    const dispatch = useDispatch()
    const {users, isLoading} = useSelector(state => state.usersReducer)

    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch])

    return (
        <div>
            {isLoading ? <Typography variant="h3">Loading...</Typography> : <Typography variant="h3">Users</Typography>}            
            {users && <Grid container spacing={3}>
                {users.map(user => (<Grid item key={user.id}>
                    <UserCard user={user}/>
                </Grid>))}
            </Grid>}
        </div>
    )
}

export default Users
