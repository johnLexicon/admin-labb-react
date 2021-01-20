import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import UserCard from '../components/UserCard';

const Users = () => {
    return (
        <div>
            <Typography variant="h3">Users</Typography>
            <Grid container spacing={3}>
                <Grid item>
                    <UserCard/>
                </Grid>
                <Grid item>
                    <UserCard/>
                </Grid>
                <Grid item>
                    <UserCard/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Users
