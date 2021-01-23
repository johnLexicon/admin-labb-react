import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsersAction} from '../actions/usersActions';
import { Grid, Container, makeStyles } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import UserCard from '../components/UserCard'
import PageHeader from './../components/PageHeader';

const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      marginTop: '3.5rem'
    }
})

const Users = () => {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)
    const classes = useStyles()

    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch])

    return (
        <Container className={classes.root} maxWidth="lg">
            <PageHeader title="Users" subtitle="Watch and remove users" icon={<PersonIcon fontSize="large" />} />            
            {users && <Grid container spacing={3} style={{justifyContent: 'center', marginTop: '3rem'}}>
                {users.map(user => (<Grid item key={user.id}>
                    <UserCard user={user}/>
                </Grid>))}
            </Grid>}
        </Container>
    )
}

export default Users
