import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Typography, IconButton, CardMedia, CardContent, Card, Box} from '@material-ui/core';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { useDispatch } from 'react-redux';
import { removeUser } from './../actions/usersActions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  delIcon:{
    color: 'red',
    marginTop: '-6px'
  },
  media: {
    height: 240,
    marginBottom: '1rem'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UserCard({user}) {
  const dispatch = useDispatch()
  const classes = useStyles();

  const handleDelete = (userId) => {
    dispatch(removeUser(userId))
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.title}>
          <Typography variant="h5" component="div" gutterBottom>
            {user.firstName} {user.lastName}
          </Typography>
          <IconButton onClick={() => {handleDelete(user.id)}} className={classes.delIcon}><DeleteForeverRoundedIcon/></IconButton>
        </Box>
        <CardMedia
          className={classes.media}
          image={user.avatar}
          title="Contemplative Reptile"
        />
        <Typography variant="body2" component="p">
          <strong>Email:</strong> {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
}